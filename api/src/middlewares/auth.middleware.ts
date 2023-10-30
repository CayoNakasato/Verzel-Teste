import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

interface DecodedUser {
  id: string;
  admin: boolean;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: DecodedUser;
    }
  }
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: any) {
    let token = req.headers.authorization;

    if (!token) {
      throw new HttpException('Missing token', HttpStatus.UNAUTHORIZED);
    }

    token = token.split(' ')[1];

    jwt.verify(
      token,
      process.env.SECRET_KEY,
      (error: jwt.VerifyErrors, decoded: any) => {
        if (error) {
          throw new HttpException('Token invalid', HttpStatus.UNAUTHORIZED);
        }
        req.user = { id: decoded.id, admin: decoded.admin };
      },
    );
    next();
  }
}

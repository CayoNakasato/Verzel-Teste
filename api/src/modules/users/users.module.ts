import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { IsAdminMiddleware } from 'src/middlewares/isAdmin.middleware';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware, IsAdminMiddleware).forRoutes({
      path: 'users',
      method: RequestMethod.GET,
    });
    consumer.apply(AuthMiddleware).forRoutes(
      {
        path: 'users',
        method: RequestMethod.DELETE,
      },
      {
        path: 'users',
        method: RequestMethod.PATCH,
      },
    );
  }
}

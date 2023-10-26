import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { IsAdminMiddleware } from 'src/middlewares/isAdmin.middleware';

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class VehiclesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: 'vehicles',
      method: RequestMethod.GET,
    });
    consumer.apply(AuthMiddleware, IsAdminMiddleware).forRoutes(
      {
        path: 'vehicles',
        method: RequestMethod.POST,
      },
      {
        path: 'vehicles/:vehicleId',
        method: RequestMethod.PATCH,
      },
      {
        path: 'vehicles/:vehicleId',
        method: RequestMethod.DELETE,
      },
    );
  }
}

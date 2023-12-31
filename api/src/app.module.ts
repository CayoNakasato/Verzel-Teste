import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { VehiclesModule } from './modules/vehicles/vehicles.module';
import { LoginModule } from './modules/login/login.module';

@Module({
  imports: [UsersModule, VehiclesModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

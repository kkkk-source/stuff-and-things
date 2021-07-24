import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StuffsModule } from './stuffs/stuffs.module';
import { MovementsModule } from './movements/movements.module';

@Module({
  imports: [TypeOrmModule.forRoot(), StuffsModule, MovementsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

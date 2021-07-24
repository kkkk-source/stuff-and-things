import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StuffsModule } from './stuffs/stuffs.module';
import { MovementsModule } from './movements/movements.module';

@Module({
  imports: [StuffsModule, MovementsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StuffsModule } from './stuffs/stuffs.module';

@Module({
  imports: [StuffsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

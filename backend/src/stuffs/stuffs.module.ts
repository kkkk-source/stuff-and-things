import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StuffsService } from './stuffs.service';
import { StuffsController } from './stuffs.controller';
import { Stuff } from './entities/stuff.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Stuff])],
  controllers: [StuffsController],
  providers: [StuffsService],
  exports: [StuffsService],
})
export class StuffsModule {}

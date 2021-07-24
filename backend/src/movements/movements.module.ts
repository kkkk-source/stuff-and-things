import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovementsService } from './movements.service';
import { StuffsModule } from '../stuffs/stuffs.module';
import { MovementsController } from './movements.controller';
import { Movement } from './entities/movement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movement]), StuffsModule],
  controllers: [MovementsController],
  providers: [MovementsService],
})
export class MovementsModule {}

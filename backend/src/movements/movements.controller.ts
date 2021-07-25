import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { MovementsService } from './movements.service';
import { StuffsService } from '../stuffs/stuffs.service';
import { Movement } from './entities/movement.entity';
import { CreateMovementDto } from './dto/create-movement.dto';

@Controller('api/v1/stuffs')
export class MovementsController {
  constructor(
    private readonly movementsService: MovementsService,
    private readonly stuffsService: StuffsService,
  ) {}

  @Post(':id/movements')
  async create(
    @Param('id') stuffId: number,
    @Body() createMovementDto: CreateMovementDto,
  ): Promise<Movement> {
    if (!(await this.stuffsService.findOne(stuffId))) {
      throw new NotFoundException();
    }

    return await this.movementsService.create(
      createMovementDto as Movement,
      stuffId,
    );
  }

  @Get(':id/movements')
  async findAllByStuffId(@Param('id') stuffId: number): Promise<Movement[]> {
    return await this.movementsService.findAllByStuffId(stuffId);
  }
}

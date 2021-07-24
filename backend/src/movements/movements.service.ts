import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movement } from './entities/movement.entity';

@Injectable()
export class MovementsService {
  constructor(
    @InjectRepository(Movement)
    private movementRepository: Repository<Movement>,
  ) {}

  async create(createMovement: Movement, stuffId: number): Promise<Movement> {
    return await this.movementRepository.save({
      ...createMovement,
      stuffId,
    });
  }

  async findAllByStuffId(stuffId: number): Promise<Movement[]> {
    return await this.movementRepository.find({
      where: { stuffId },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stuff } from './entities/stuff.entity';

@Injectable()
export class StuffsService {
  constructor(
    @InjectRepository(Stuff)
    private stuffRepository: Repository<Stuff>,
  ) {}

  async create(createStuff: Stuff): Promise<Stuff> {
    console.log(createStuff);
    return await this.stuffRepository.save(createStuff);
  }

  async findAll(): Promise<Stuff[]> {
    return await this.stuffRepository.find();
  }

  async findOne(id: number): Promise<Stuff> {
    return await this.stuffRepository.findOne(id);
  }

  async update(id: number, updateStuff: Stuff): Promise<Stuff> {
    return await this.stuffRepository.save({
      id,
      ...updateStuff,
    });
  }

  async remove(id: number): Promise<void> {
    await this.stuffRepository.delete(id);
  }
}

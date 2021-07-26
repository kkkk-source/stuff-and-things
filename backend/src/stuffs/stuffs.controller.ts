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
import { StuffsService } from './stuffs.service';
import { Stuff } from './entities/stuff.entity';
import { CreateStuffDto } from './dto/create-stuff.dto';
import { UpdateStuffDto } from './dto/update-stuff.dto';

@Controller('api/v1/stuffs')
export class StuffsController {
  constructor(private readonly stuffsService: StuffsService) {}

  @Post()
  async create(@Body() createStuffDto: CreateStuffDto): Promise<Stuff> {
    return await this.stuffsService.create(createStuffDto as Stuff);
  }

  @Get()
  async findAll(): Promise<Stuff[]> {
    return await this.stuffsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Stuff> {
    const stuff = await this.stuffsService.findOne(+id);
    if (!stuff) {
	    throw new NotFoundException();
    }

    return stuff;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStuffDto: UpdateStuffDto,
  ): Promise<Stuff> {
    return await this.stuffsService.update(+id, updateStuffDto as Stuff);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.stuffsService.remove(+id);
  }
}

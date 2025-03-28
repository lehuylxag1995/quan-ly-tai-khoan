import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DonViService } from './don-vi.service';
import { CreateDonViDto } from './dto/create-don-vi.dto';
import { UpdateDonViDto } from './dto/update-don-vi.dto';
import { Prisma } from '@prisma/client';

@Controller('don-vi')
export class DonViController {
  constructor(private readonly donViService: DonViService) {}

  @Post()
  async create(@Body() createDonViDto: Prisma.DonViCreateInput) {
    return await this.donViService.create(createDonViDto);
  }

  @Get()
  findAll() {
    return this.donViService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donViService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDonViDto: UpdateDonViDto) {
    return this.donViService.update(+id, updateDonViDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donViService.remove(+id);
  }
}

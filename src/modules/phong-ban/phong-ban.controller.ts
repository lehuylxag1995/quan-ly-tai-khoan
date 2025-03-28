import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhongBanService } from './phong-ban.service';
import { CreatePhongBanDto } from './dto/create-phong-ban.dto';
import { UpdatePhongBanDto } from './dto/update-phong-ban.dto';

@Controller('phong-ban')
export class PhongBanController {
  constructor(private readonly phongBanService: PhongBanService) {}

  @Post()
  create(@Body() createPhongBanDto: CreatePhongBanDto) {
    return this.phongBanService.create(createPhongBanDto);
  }

  @Get()
  findAll() {
    return this.phongBanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phongBanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhongBanDto: UpdatePhongBanDto) {
    return this.phongBanService.update(+id, updatePhongBanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phongBanService.remove(+id);
  }
}

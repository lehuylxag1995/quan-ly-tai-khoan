import { Injectable } from '@nestjs/common';
import { CreateNguoiDungDto } from './dto/create-nguoi-dung.dto';
import { UpdateNguoiDungDto } from './dto/update-nguoi-dung.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class NguoiDungService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createNguoiDungDto: Prisma.NguoiDungCreateInput) {
    return await this.prismaService.nguoiDung.create({
      data: createNguoiDungDto,
    });
  }

  findAll() {
    return `This action returns all nguoiDung`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nguoiDung`;
  }

  update(id: number, updateNguoiDungDto: UpdateNguoiDungDto) {
    return `This action updates a #${id} nguoiDung`;
  }

  remove(id: number) {
    return `This action removes a #${id} nguoiDung`;
  }
}

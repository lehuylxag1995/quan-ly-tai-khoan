import { Injectable } from '@nestjs/common';
import { CreatePhongBanDto } from './dto/create-phong-ban.dto';
import { UpdatePhongBanDto } from './dto/update-phong-ban.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PhongBanService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.PhongBanCreateInput) {
    console.log(data);
    return await this.prisma.phongBan.create({ data });
  }

  findAll() {
    return `This action returns all phongBan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} phongBan`;
  }

  update(id: number, updatePhongBanDto: UpdatePhongBanDto) {
    return `This action updates a #${id} phongBan`;
  }

  remove(id: number) {
    return `This action removes a #${id} phongBan`;
  }
}

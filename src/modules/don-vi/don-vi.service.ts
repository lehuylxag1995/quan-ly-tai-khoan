import { Injectable } from '@nestjs/common';
import { CreateDonViDto } from './dto/create-don-vi.dto';
import { UpdateDonViDto } from './dto/update-don-vi.dto';
import { PrismaService } from 'src/prisma.service';
import { DonVi } from '@modules/don-vi/entities/don-vi.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class DonViService {
  constructor(private readonly prisma: PrismaService) {}

  //Cách 1: Dùng Prisma Client's generate
  async create(data: Prisma.DonViCreateInput): Promise<DonVi> {
    return this.prisma.donVi.create({ data });
  }

  //Cách 2: Dùng DTO
  // async create(createDonViDto: CreateDonViDto): Promise<DonVi> {
  //   const result = await this.prisma.donVi.create({
  //     data: {
  //       TenDv: createDonViDto.tendv,
  //       MaDv: createDonViDto.madv,
  //       GhiChu: createDonViDto.ghichu,
  //     },
  //   });

  //   return result;
  // }

  findAll() {
    return `This action returns all donVi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} donVi`;
  }

  update(id: number, updateDonViDto: UpdateDonViDto) {
    return `This action updates a #${id} donVi`;
  }

  remove(id: number) {
    return `This action removes a #${id} donVi`;
  }
}

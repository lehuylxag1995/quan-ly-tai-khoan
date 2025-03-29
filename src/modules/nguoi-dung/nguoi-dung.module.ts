import { Module } from '@nestjs/common';
import { NguoiDungService } from './nguoi-dung.service';
import { NguoiDungController } from './nguoi-dung.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NguoiDungController],
  providers: [NguoiDungService, PrismaService],
})
export class NguoiDungModule {}

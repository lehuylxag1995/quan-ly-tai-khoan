import { Module } from '@nestjs/common';
import { PhongBanService } from './phong-ban.service';
import { PhongBanController } from './phong-ban.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PhongBanController],
  providers: [PhongBanService, PrismaService],
})
export class PhongBanModule {}

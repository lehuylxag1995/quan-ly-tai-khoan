import { Module } from '@nestjs/common';
import { DonViService } from './don-vi.service';
import { DonViController } from './don-vi.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [DonViController],
  providers: [DonViService, PrismaService],
})
export class DonViModule {}

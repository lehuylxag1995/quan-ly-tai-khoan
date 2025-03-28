import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DonViModule } from './modules/don-vi/don-vi.module';
import { PhongBanModule } from './modules/phong-ban/phong-ban.module';
import { NguoiDungModule } from './modules/nguoi-dung/nguoi-dung.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DonViModule,
    PhongBanModule,
    NguoiDungModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

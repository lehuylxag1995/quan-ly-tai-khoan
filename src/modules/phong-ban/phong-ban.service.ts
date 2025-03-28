import { Injectable } from '@nestjs/common';
import { CreatePhongBanDto } from './dto/create-phong-ban.dto';
import { UpdatePhongBanDto } from './dto/update-phong-ban.dto';

@Injectable()
export class PhongBanService {
  create(createPhongBanDto: CreatePhongBanDto) {
    return 'This action adds a new phongBan';
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

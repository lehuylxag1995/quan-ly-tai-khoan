import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePhongBanDto {
  @IsNotEmpty({ message: 'Chưa nhập tên đơn vị' })
  tenpb: string;

  @IsNotEmpty({ message: 'Chưa nhập mã đơn vị' })
  mapb: string;

  @IsOptional()
  madvId: string;
}

import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateDonViDto {
  @IsNotEmpty({ message: 'Chưa nhập tên đơn vị' })
  tendv: string;

  @IsNotEmpty({ message: 'Chưa nhập mã đơn vị' })
  madv: string;

  @IsOptional()
  ghichu: string;
}

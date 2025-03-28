import { PartialType } from '@nestjs/mapped-types';
import { CreatePhongBanDto } from './create-phong-ban.dto';

export class UpdatePhongBanDto extends PartialType(CreatePhongBanDto) {}

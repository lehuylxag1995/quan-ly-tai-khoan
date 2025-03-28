import { Test, TestingModule } from '@nestjs/testing';
import { PhongBanService } from './phong-ban.service';

describe('PhongBanService', () => {
  let service: PhongBanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhongBanService],
    }).compile();

    service = module.get<PhongBanService>(PhongBanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

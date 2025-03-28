import { Test, TestingModule } from '@nestjs/testing';
import { PhongBanController } from './phong-ban.controller';
import { PhongBanService } from './phong-ban.service';

describe('PhongBanController', () => {
  let controller: PhongBanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhongBanController],
      providers: [PhongBanService],
    }).compile();

    controller = module.get<PhongBanController>(PhongBanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

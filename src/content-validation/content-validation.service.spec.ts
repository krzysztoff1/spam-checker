import { Test, TestingModule } from '@nestjs/testing';
import { ContentValidationService } from './content-validation.service';

describe('ContentValidationService', () => {
  let service: ContentValidationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentValidationService],
    }).compile();

    service = module.get<ContentValidationService>(ContentValidationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should throw an error if content is less than 3 characters', () => {
    expect(async () => await service.validateContent('')).rejects.toThrow(
      'Content must be between 3 and 1000 characters',
    );
  });

  it('should throw an error if content is more than 1000 characters', async () => {
    await expect(
      async () => await service.validateContent('a'.repeat(1001)),
    ).rejects.toThrow('Content must be between 3 and 1000 characters');
  });
});

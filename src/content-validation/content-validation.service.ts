import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ContentValidationService {
  validateContent(content: string): boolean {
    return this.hasCorrectLength(content);
  }

  hasCorrectLength(content: string): boolean {
    if (content.length > 3 && content.length <= 1000) {
      return true;
    }

    throw new BadRequestException(
      'Content must be between 3 and 1000 characters',
    );
  }
}

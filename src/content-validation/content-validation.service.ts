import { BadRequestException, Injectable } from '@nestjs/common';
import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

@Injectable()
export class ContentValidationService {
  async validateContent(content: string): Promise<boolean> {
    const results = await Promise.all([
      this.hasCorrectLength(content),
      this.isNotSpam(content),
    ]);

    return results.every((result) => result);
  }

  async hasCorrectLength(content: string): Promise<boolean> {
    if (content.length > 3 && content.length <= 1000) {
      return true;
    }

    throw new BadRequestException(
      'Content must be between 3 and 1000 characters',
    );
  }

  async isNotSpam(content: string): Promise<boolean> {
    const result = await generateObject({
      model: openai('gpt-4o'),
      schema: z.object({
        isSpam: z.boolean(),
        reason: z.string(),
      }),
      prompt: `Check if the content is spam. 
      Content: ${content}`,
    });

    const { isSpam, reason } = result.object;

    if (isSpam) {
      throw new BadRequestException({ reason });
    }

    return true;
  }
}

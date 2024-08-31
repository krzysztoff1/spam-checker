import { Body, Controller, Post, Res, HttpStatus } from '@nestjs/common';
import { validateCommentDto } from './comment.dto';
import { Response } from 'express';
import { ContentValidationService } from '../content-validation/content-validation.service';
@Controller('comment')
export class CommentController {
  constructor(private contentValidationService: ContentValidationService) {}

  @Post()
  async validateComment(
    @Body() comment: validateCommentDto,
    @Res() res: Response,
  ) {
    await this.contentValidationService.validateContent(comment.content);
    return res.status(HttpStatus.OK).send();
  }
}

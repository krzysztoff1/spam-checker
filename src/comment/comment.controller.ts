import { Body, Controller, Post, Res, HttpStatus } from '@nestjs/common';
import { validateCommentDto } from './comment.dto';
import { Response } from 'express';

@Controller('comment')
export class CommentController {
  @Post()
  validateComment(@Body() comment: validateCommentDto, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(comment);
  }
}

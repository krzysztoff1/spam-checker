import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentController } from './comment/comment.controller';
import { ContentValidationService } from './content-validation/content-validation.service';

@Module({
  imports: [],
  controllers: [AppController, CommentController],
  providers: [AppService, ContentValidationService],
})
export class AppModule {}

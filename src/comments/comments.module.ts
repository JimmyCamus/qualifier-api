import { Module } from '@nestjs/common';
import { CommentsService } from './services/comments.service';
import { CommentsController } from './controller/comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './schemas/comment.schema';
import { CommentRepository } from './repository/comment.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'comment', schema: CommentSchema }]),
  ],
  providers: [CommentsService],
  controllers: [CommentsController, CommentRepository],
})
export class CommentsModule {}

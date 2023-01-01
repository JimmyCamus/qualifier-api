import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AllCommentEntires, CommentDto } from '../dto/comment.dto';
import { CommentDocument } from '../interfaces/comment.document';
import { CommentsService } from '../services/comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get('/:id')
  getOneComment(@Param('id') commentId: number) {
    return this.commentsService.getComment(commentId);
  }

  @Get('')
  getAllComments(
    @Query() query: AllCommentEntires,
  ): Promise<CommentDocument[]> {
    return this.commentsService.getComments(query);
  }

  @Post('/:gameId')
  async createComment(
    @Param('gameId') gameId: number,
    @Body() body: CommentDto,
  ): Promise<CommentDocument> {
    return this.commentsService.createComment(gameId, body);
  }

  @Put(':id')
  async upateComment(
    @Param('id') commentId: number,
    @Body() body: AllCommentEntires,
  ): Promise<CommentDocument> {
    return await this.commentsService.updateComment(commentId, body);
  }

  @Put(':id/delete')
  async deleteComment(
    @Param('id') commentId: number,
  ): Promise<CommentDocument> {
    return await this.commentsService.deleteComment(commentId);
  }
}

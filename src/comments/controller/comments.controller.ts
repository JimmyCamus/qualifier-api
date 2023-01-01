import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
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
  @UseGuards(AuthGuard('jwt'))
  async createComment(
    @Param('gameId') gameId: number,
    @Body() body: CommentDto,
    @Request() req: any,
  ): Promise<CommentDocument> {
    body['user'] = req.user.id;
    return this.commentsService.createComment(gameId, body);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  async upateComment(
    @Param('id') commentId: number,
    @Body() body: AllCommentEntires,
  ): Promise<CommentDocument> {
    return await this.commentsService.updateComment(commentId, body);
  }

  @Put(':id/delete')
  @UseGuards(AuthGuard('jwt'))
  async deleteComment(
    @Param('id') commentId: number,
  ): Promise<CommentDocument> {
    return await this.commentsService.deleteComment(commentId);
  }
}

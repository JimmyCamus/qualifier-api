import { Injectable } from '@nestjs/common';
import { GamesService } from 'src/games/services/games.service';
import { AllCommentEntires, CommentDto } from '../dto/comment.dto';
import { CommentDocument } from '../interfaces/comment.document';
import { CommentRepository } from '../repository/comment.repository';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly gamesService: GamesService,
  ) {}
  async getComment(commentId: number): Promise<CommentDocument> {
    return await this.commentRepository.getOne({ _id: commentId });
  }

  async getComments(query: AllCommentEntires): Promise<CommentDocument[]> {
    return await this.commentRepository.getMany(query);
  }

  async createComment(
    gameId: number,
    commentData: CommentDto,
  ): Promise<CommentDocument> {
    const comment = await this.commentRepository.create(commentData);

    const gameData = await this.gamesService.getGame(gameId);

    const newRating = Math.floor(
      (gameData.allRatings + comment.rating) / (gameData.comments.length + 1),
    );

    await this.gamesService.updateGame(gameId, {
      $push: { comments: comment },
      rating: newRating,
      allRatings: gameData.allRatings + comment.rating,
    });

    return comment;
  }

  async updateComment(
    commentId: number,
    commentData: AllCommentEntires,
  ): Promise<CommentDocument> {
    return await this.commentRepository.update({ _id: commentId }, commentData);
  }

  async deleteComment(commentId: number): Promise<CommentDocument> {
    return await this.commentRepository.delete({ _id: commentId });
  }
}

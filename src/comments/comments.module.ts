import { Module } from '@nestjs/common';
import { CommentsService } from './services/comments.service';
import { CommentsController } from './controller/comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './schemas/comment.schema';
import { CommentRepository } from './repository/comment.repository';
import { GamesService } from 'src/games/services/games.service';
import { GameRepository } from 'src/games/repository/game.repository';
import { GamesModule } from 'src/games/games.module';
import { GameSchema } from 'src/games/schemas/game.schema';
import { UsersModule } from 'src/users/users.module';
import { UserSchema } from 'src/users/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Comment', schema: CommentSchema }]),
    MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    GamesModule,
    UsersModule,
  ],
  providers: [CommentsService, CommentRepository, GamesService, GameRepository],
  controllers: [CommentsController],
})
export class CommentsModule {}

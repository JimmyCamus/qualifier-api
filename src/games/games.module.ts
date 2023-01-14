import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/users/schemas/user.schema';
import { GamesController } from './controllers/games.controller';
import { GameRepository } from './repository/game.repository';
import { GameSchema } from './schemas/game.schema';
import { GamesService } from './services/games.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }]),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [GamesController],
  providers: [GamesService, GameRepository],
  exports: [GamesService, GameRepository],
})
export class GamesModule {}

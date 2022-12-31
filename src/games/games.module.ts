import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GamesController } from './controllers/games.controller';
import { GameRepository } from './repository/game.repository';
import { GameSchema } from './schemas/game.schema';
import { GamesService } from './services/games.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'game', schema: GameSchema }])],
  controllers: [GamesController],
  providers: [GamesService, GameRepository],
})
export class GamesModule {}
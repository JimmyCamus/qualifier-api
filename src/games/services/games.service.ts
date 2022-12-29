import { Injectable } from '@nestjs/common';
import { AllGameEntries, GameDto } from '../dto/game.dto';
import { GameDocument } from '../interfaces/game.document';
import { GameRepository } from '../repository/game.repository';

@Injectable()
export class GamesService {
  constructor(private readonly gameRepository: GameRepository) {}

  async getGame(gameId: number): Promise<GameDocument> {
    return await this.gameRepository.getOne({ _id: gameId });
  }

  async getGames(query: AllGameEntries): Promise<GameDocument[]> {
    let sanatizedQuery = {};

    if (query.categories) {
      sanatizedQuery = { ...query, categories: { $all: query.categories } };
    }
    console.log(sanatizedQuery);
    return await this.gameRepository.getMany(sanatizedQuery);
  }

  async createGame(gameData: GameDto): Promise<GameDocument> {
    return await this.gameRepository.create(gameData);
  }

  async updateGame(gameId: number, gameData: GameDto): Promise<GameDocument> {
    return await this.gameRepository.update({ _id: gameId }, gameData);
  }
}

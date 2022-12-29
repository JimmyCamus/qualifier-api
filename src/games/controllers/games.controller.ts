import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AllGameEntries, GameDto, UpdateGameDto } from '../dto/game.dto';
import { GameDocument } from '../interfaces/game.document';
import { GamesService } from '../services/games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get(':id')
  getOneGame(@Param('id') gameId: number): Promise<GameDocument> {
    return this.gamesService.getGame(gameId);
  }

  @Get('')
  getAllGames(@Query() query: AllGameEntries): Promise<GameDocument[]> {
    return this.gamesService.getGames(query);
  }

  @Post('')
  async createGame(@Body() body: GameDto): Promise<GameDocument> {
    return await this.gamesService.createGame(body);
  }

  @Put(':id')
  async upateGame(
    @Param('id') gameId: number,
    @Body() body: UpdateGameDto,
  ): Promise<GameDocument> {
    return await this.gamesService.updateGame(gameId, body);
  }
}

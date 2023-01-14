import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FilesInterceptor } from '@nestjs/platform-express';
import { RolesGuard } from 'src/auth/guards/role.guards';
import { Roles } from 'src/auth/strategies/roles.auth';
import { Role } from 'src/users/interfaces/user';
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

  @Roles(Role.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
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

  @Put(':id/images')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadImages(
    @Param('id') gameId: number,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return this.gamesService.addFiles(gameId, files);
  }
}

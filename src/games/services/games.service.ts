import { Injectable } from '@nestjs/common';
import { AllGameEntries, GameDto } from '../dto/game.dto';
import { GameDocument } from '../interfaces/game.document';
import { GameRepository } from '../repository/game.repository';
import {
  UploadApiErrorResponse,
  UploadApiResponse,
  v2 as cloudinary,
} from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class GamesService {
  constructor(private readonly gameRepository: GameRepository) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }
  async getGame(gameId: number): Promise<GameDocument> {
    return await this.gameRepository.getOne({ _id: gameId });
  }

  async getGames(query: AllGameEntries): Promise<GameDocument[]> {
    let sanatizedQuery = {};

    if (query.categories) {
      sanatizedQuery = { ...query, categories: { $all: query.categories } };
    }
    return await this.gameRepository.getMany(sanatizedQuery);
  }

  async createGame(gameData: GameDto): Promise<GameDocument> {
    return await this.gameRepository.create(gameData);
  }

  async updateGame(gameId: number, gameData: GameDto): Promise<GameDocument> {
    return await this.gameRepository.update({ _id: gameId }, gameData);
  }

  async addFiles(
    gameId: number,
    files: Array<Express.Multer.File>,
  ): Promise<GameDocument> {
    const images = [];

    for (const file of files) {
      const img = await this.uploadImage(file);
      images.push(img.secure_url);
    }

    const query = { images };
    return await this.gameRepository.update({ _id: gameId }, query);
  }

  private async uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = cloudinary.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      toStream(file.buffer).pipe(upload);
    });
  }
}

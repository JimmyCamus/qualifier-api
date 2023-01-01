import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GameDto } from '../dto/game.dto';
import { GameDocument } from '../interfaces/game.document';

@Injectable()
export class GameRepository {
  constructor(
    @InjectModel('game') private readonly gameModel: Model<GameDocument>,
  ) {}

  getMany(query: object): Promise<GameDocument[]> {
    return this.gameModel.find(query).exec();
  }

  getOne(query: object): Promise<GameDocument> {
    return this.gameModel.findOne(query).exec();
  }

  create(gameData: GameDto): Promise<GameDocument> {
    return this.gameModel.create(gameData);
  }

  update(filters: object, updateData: object): Promise<GameDocument> {
    return this.gameModel
      .findOneAndUpdate(filters, updateData, { new: true })
      .exec();
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GameDto } from '../dto/game.dto';
import { GameDocument } from '../interfaces/game.document';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('game') private readonly gameModel: Model<GameDocument>,
  ) {}

  getOne(query: object): Promise<GameDocument> {
    return this.gameModel.findOne(query).exec();
  }

  create(userData: GameDto): Promise<GameDocument> {
    return this.gameModel.create(userData);
  }
}

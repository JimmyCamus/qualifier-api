import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/users/interfaces/user.document';
import { GameDto } from '../dto/game.dto';
import { GameDocument } from '../interfaces/game.document';

@Injectable()
export class GameRepository {
  constructor(
    @InjectModel('Game') private readonly gameModel: Model<GameDocument>,
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  getMany(query: object): Promise<GameDocument[]> {
    return this.gameModel.find(query).exec();
  }

  getOne(query: object): Promise<GameDocument> {
    return this.gameModel
      .findOne(query)
      .populate('comments')
      .populate({
        path: 'comments.user',
        select: 'username',
        model: this.userModel,
      })
      .exec();
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

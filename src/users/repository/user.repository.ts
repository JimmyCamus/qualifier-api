import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from '../dto/user.dto';
import { UserDocument } from '../interfaces/user.document';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  getOne(query: object): Promise<UserDocument> {
    return this.userModel.findOne(query).exec();
  }

  create(userData: UserDto): Promise<UserDocument> {
    return this.userModel.create(userData);
  }
}

import { Injectable } from '@nestjs/common';
import { UserDocument } from '../interfaces/user.document';
import { UserRepository } from '../repository/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}
  async signup(
    username: string,
    password: string,
    email: string,
  ): Promise<UserDocument> {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    return await this.userRepository.create({
      username,
      password: hashedPassword,
      email,
    });
  }
}

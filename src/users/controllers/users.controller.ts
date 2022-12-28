import { Body, Controller, Post } from '@nestjs/common';
import { UserDocument } from '../interfaces/user.document';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('/signup')
  async createUser(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('email') email: string,
  ): Promise<UserDocument> {
    return await this.userService.signup(username, password, email);
  }
}

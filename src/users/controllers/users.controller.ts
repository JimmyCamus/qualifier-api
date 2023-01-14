import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';
import { UserDocument } from '../interfaces/user.document';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('/signup')
  async createUser(@Body() body: UserDto): Promise<UserDocument> {
    const username = body.username;
    const password = body.password;
    const email = body.email;
    return await this.userService.signup(username, password, email);
  }
}

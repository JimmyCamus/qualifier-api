import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/interfaces/user';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(email);
    if (!user) return;
    const passwordValidate = await bcrypt.compare(password, user.password);
    if (!passwordValidate) return;

    return user;
  }

  async login(user: User) {
    const payload = { username: user.username, id: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

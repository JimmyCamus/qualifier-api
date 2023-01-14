import { Document } from 'mongoose';
import { Role } from './user';

export interface UserDocument extends Document {
  id: number;
  username: string;
  email: string;
  password: string;
  role: Role;
}

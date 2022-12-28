import { Document } from 'mongoose';

export interface UserDocument extends Document {
  id: number;
  username: string;
  email: string;
  password: string;
}

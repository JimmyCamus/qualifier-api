import { Document } from 'mongoose';
import { User } from '../../users/interfaces/user';

export interface CommentDocument extends Document {
  id: number;
  description: string;
  rating: number;
  user: User;
}

import { User } from '../../users/interfaces/user';

export interface Comment {
  id: number;
  description: string;
  rating: number;
  user: User;
}

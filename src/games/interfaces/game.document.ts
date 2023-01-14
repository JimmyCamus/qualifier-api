import { Document } from 'mongoose';

export interface GameDocument extends Document {
  id: number;
  title: string;
  description: string;
  rating: number;
  allRatings: number;
  images: Array<string>;
  comments: Array<Comment>;
  categories: Array<string>;
}

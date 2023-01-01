import { Document } from 'mongoose';

export interface GameDocument extends Document {
  id: number;
  title: string;
  description: string;
  rating: number;
  images: Array<string>;
  comments: Array<any>;
  categories: Array<string>;
}

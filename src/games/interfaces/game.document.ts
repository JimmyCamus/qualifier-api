import { Document } from 'mongoose';

export interface GameDocument extends Document {
  id: number;
  title: string;
}

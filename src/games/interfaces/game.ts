export interface Game {
  id: number;
  title: string;
  description: string;
  rating: number;
  images: Array<any>;
  comments: Array<any>;
  categories: Array<string>;
}

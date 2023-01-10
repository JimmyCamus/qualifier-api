export interface Game {
  id: number;
  title: string;
  description: string;
  rating: number;
  allRatings: number;
  images: Array<string>;
  comments: Array<any>;
  categories: Array<string>;
}

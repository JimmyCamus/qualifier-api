import { Schema } from 'mongoose';

export const GameSchema = new Schema({
  id: Number,
  title: {
    type: String,
    unique: true,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  allRatings: {
    type: Number,
    default: 0,
  },
  images: {
    type: Array<string>,
    default: [],
  },
  comments: {
    type: Array<any>,
    default: [],
  },
  categories: {
    type: Array<string>,
    default: [],
  },
});

GameSchema.methods.toJSON = function () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { __v, _id, ...gameData } = this.toObject();
  gameData.id = _id;
  return gameData;
};

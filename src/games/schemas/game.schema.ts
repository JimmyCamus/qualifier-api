import { Schema } from 'mongoose';

export const GameSchema = new Schema({
  id: Number,
  title: {
    type: String,
    unique: true,
    require: true,
  },
});

GameSchema.methods.toJSON = function () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { __v, _id, ...gameData } = this.toObject();
  gameData.id = _id;
  return gameData;
};

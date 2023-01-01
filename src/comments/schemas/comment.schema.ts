import { Schema } from 'mongoose';

export const CommentSchema = new Schema({
  id: Number,
  description: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

CommentSchema.methods.toJSON = function () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { __v, _id, ...commentData } = this.toObject();
  commentData.id = _id;
  return commentData;
};

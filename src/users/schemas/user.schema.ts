import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  id: Number,
  username: {
    type: String,
    unique: true,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

UserSchema.methods.toJSON = function () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { __v, _id, ...userData } = this.toObject();
  userData.id = _id;
  return userData;
};

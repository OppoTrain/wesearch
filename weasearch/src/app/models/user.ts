import mongoose, { models, Schema } from 'mongoose';

const baseUserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Expert', 'Researcher'], 
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model('User', baseUserSchema);

export default User;

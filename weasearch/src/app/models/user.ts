import mongoose, { models, Schema } from 'mongoose';

const baseUserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Student', 'Researcher'],
    },
    linkedinProfile: {
      type: String,
    },
    bio: {
      type: String,
      
    },
    gender: {
      type: String,
      enum: ['male', 'female'],
    },
    preferredLanguage: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model('User', baseUserSchema);

export default User;

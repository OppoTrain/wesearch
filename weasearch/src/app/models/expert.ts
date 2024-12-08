import mongoose, { models, Schema } from 'mongoose';

const expertSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
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
    expertise: {
      type: String,
      enum: ['student', 'career changer', 'junior', 'intermediate', 'advanced', 'senior', 'executive'],
    },
    company: {
      type: String,
    },
    school: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
  },
  { timestamps: true }
);

const Expert = models.Expert || mongoose.model('Expert', expertSchema);

export default Expert;

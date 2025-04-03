import mongoose, { models, Schema } from 'mongoose';
import User from './user'; 

const researcherSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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
    academicGoals: {
      type: String,
    },
    researchMethodologies: {
      type: String,
    },
    researchInterests: {
      type: String,
    },
  },
  { timestamps: true }
);

const Researcher = models.Researcher || mongoose.model('Researcher', researcherSchema);

export default Researcher;

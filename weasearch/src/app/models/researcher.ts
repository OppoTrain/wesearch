import mongoose, { models, Schema } from 'mongoose';
import User from './user';

const researcherSchema = new Schema(
  {
    expertise: {
      type: String,
      enum: ['student', 'career changer', 'junior','intermediate','advanced','senior','executive'],
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
    academicGoals:{
      type:String
    },
    researchMethodologies:{
      type:String
    },
    researchInterests:{
      type:String
    }
  },
  { timestamps: true }
);

const Researcher = models.Researcher || User.discriminator('Researcher', researcherSchema);

export default Researcher;

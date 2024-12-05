import mongoose, { models, Schema } from 'mongoose';
import User from './user';

const studentSchema = new Schema(
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
  },
  { timestamps: true }
);

const Student = models.Student || User.discriminator('Student', studentSchema);

export default Student;

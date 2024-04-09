import mongoose from 'mongoose';

const worksInHospitalSchema = new mongoose.Schema({
  type: mongoose.Schema.Type.ObjectId,
  ref: 'Hospital',
  time: {
    type: String,
    required: true,
  },
});

const doctorSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [worksInHospitalSchema],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);

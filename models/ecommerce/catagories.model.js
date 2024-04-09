import mongoose from 'mongoose';

const catagoriesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
  },
  { timestamps: true }
);

export const Catagories = mongoose.model('Catagories', catagoriesSchema);

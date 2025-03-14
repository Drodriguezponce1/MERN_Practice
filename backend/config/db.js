import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // this will load the .env file and make the variables available to the process.env object

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connection SUCCESS at ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // 1 code means that the process failed, 0 means success
  }
}
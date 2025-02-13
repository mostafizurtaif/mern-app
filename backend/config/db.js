import mongoose from "mongoose";
import dotenv from "dotenv";

// Load variables from .env into process.env
dotenv.config();

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error(`Database connection failed: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

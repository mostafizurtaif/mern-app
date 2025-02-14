import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
      trim: true,
    },
    duration: {
      type: Number,
      required: [true, "Duration is required!"],
      min: [1, "Duration must be at least 1 minute!"],
    },
    releaseYear: {
      type: Number,
      required: [true, "Release year is required!"],
      min: 1900,
      max: [new Date().getFullYear(), "Release year cannot be in the future!"],
    },
    rating: {
      type: Number,
      required: true,
      min: [0, "Rating cannot be less than 0"],
      max: [100, "Rating cannot be greater than 100"],
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

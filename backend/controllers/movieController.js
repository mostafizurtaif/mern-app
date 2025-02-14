import Movie from "../models/Movie.js";
import validateMovie from "../utils/validateMovie.js";

export const createMovie = async (req, res) => {
  // Validate input
  const errors = validateMovie(req.body);

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: errors.join(" "),
    });
  }

  try {
    const { title, duration, releaseYear, rating } = req.body;
    const newMovie = await Movie.create({
      title,
      duration,
      releaseYear,
      rating,
    });

    res.status(201).json({
      success: true,
      message: "Movie added successfully! ",
      movie: newMovie,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ success: false, message: error.message });
    }

    console.error("Error adding movie: ", error);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

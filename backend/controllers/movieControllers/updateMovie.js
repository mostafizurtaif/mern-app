import mongoose from "mongoose";
import Movie from "../../models/Movie.js";
import validateMovie from "../../utils/validateMovie.js";

export const updateMovie = async (req, res) => {
  const { id } = req.params;

  // Validate movie ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid movie ID format!" });
  }

  // Validate input
  const errors = validateMovie(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: errors.join(" ") });
  }

  try {
    const { title, duration, releaseYear, rating } = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      {
        title,
        duration,
        releaseYear,
        rating,
      },
      { new: true }
    );

    if (!updatedMovie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Movie updated successfully!",
      data: updatedMovie,
    });
  } catch (error) {
    if (error.name == "ValidationError") {
      return res.status(400).json({ success: false, message: error.message });
    }

    console.error("Error updating movie: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

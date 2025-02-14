import Movie from "../../models/Movie.js";
import mongoose from "mongoose";

export const deleteMovie = async (req, res) => {
  const { id } = req.params;

  // Validate movie ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid movie ID format!" });
  }

  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not found!" });
    }

    res.status(200).json({
      success: true,
      message: "Movie deleted successfully!",
      data: deletedMovie,
    });
  } catch (error) {
    console.error("Error deleting movie: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

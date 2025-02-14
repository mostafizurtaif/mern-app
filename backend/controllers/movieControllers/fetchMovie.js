import mongoose from "mongoose";
import Movie from "../../models/Movie.js";

export const fetchMovie = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid movie ID format!" });
  }

  try {
    const movie = await Movie.findById(id);

    if (!movie) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not found!" });
    }

    res.status(200).json({ success: true, data: movie });
  } catch (error) {
    console.error("Error fetching movie: ", error.message);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

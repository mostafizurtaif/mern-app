import Movie from "../../models/Movie.js";

export const fetchAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    if (movies.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No movies found in the database!" });
    }

    res.status(200).json({ success: true, count: movies.length, data: movies });
  } catch (error) {
    console.error("Error fetching movies: ", error.message);
    res.status(500).json({ message: "Internal server error!" });
  }
};

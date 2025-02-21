import axios from "axios";

const deleteMovie = async (id, setMovies) => {
  try {
    const response = await axios.delete(`http://localhost:5050/${id}`);
    setMovies((prevMovies) => prevMovies.filter((movie) => movie._id != id));
  } catch (error) {
    console.error(error);
  }
};

export default deleteMovie;

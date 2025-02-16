import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

const MovieList = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:5050");

        setMovies(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching movies: ", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className="m-5 mb-4 text-4xl font-bold">Movie List</h1>
      {loading ? (
        <div className="mt-10 flex items-center justify-center">
          <Spinner />
        </div>
      ) : error ? (
        <ErrorMessage error />
      ) : (
        <div className="mx-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard {...movie} key={movie._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;

import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";

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
      <div className="flex items-center gap-x-2">
        <h1 className="m-5 mb-4 text-4xl font-bold">Movie List</h1>
        <Link to="/movie/add">
          <MdAddCircle className="relative top-[5px] cursor-pointer rounded-xl bg-gray-700 p-1 text-4xl text-slate-100 transition duration-200 hover:bg-gray-900 hover:text-slate-300" />
        </Link>
      </div>
      {loading ? (
        <div className="mt-10 flex items-center justify-center">
          <Spinner />
        </div>
      ) : error ? (
        <ErrorMessage error />
      ) : (
        <div className="mx-5 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard {...movie} key={movie._id} setMovies={setMovies} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;

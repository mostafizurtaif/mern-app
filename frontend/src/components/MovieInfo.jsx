import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { formatTime } from "../utils/formatTime";
import ErrorMessage from "./ErrorMessage";

const MovieInfo = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`http://localhost:5050/${id}`);

        setMovie(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.error("Error fetching movie: ", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      <h1 className="m-5 mb-4 text-4xl font-bold">Movie Info</h1>

      {loading ? (
        <div className="mt-10 flex items-center justify-center">
          <Spinner />
        </div>
      ) : error ? (
        <ErrorMessage error />
      ) : (
        <div className="m-5 rounded-lg border border-gray-300 p-3.5">
          <p>
            <span className="font-bold">Title:</span> {movie.title}
          </p>
          <p>
            <span className="font-bold">Duration:</span>{" "}
            {formatTime(movie.duration)}
          </p>
          <p>
            <span className="font-bold">Released on:</span> {movie.releaseYear}
          </p>
          <p>
            <span className="font-bold">Rating:</span> {movie.rating + "%"}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;

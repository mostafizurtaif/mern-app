import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";

const MovieEdit = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    duration: 0,
    releaseYear: 0,
    rating: 0,
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setError(false);
      setLoading(true);

      try {
        const response = await axios.get(`http://localhost:5050/${id}`);
        const movie = response.data.data;

        setFormData({
          title: movie.title || "",
          duration: movie.duration || 0,
          releaseYear: movie.releaseYear || 0,
          rating: movie.rating || 0,
        });
      } catch (error) {
        setError(error);
        console.error("Error fetching movie: ", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setSuccess(false);
    setFormData({
      ...formData,
      [name]: name === "title" ? value : Number(value),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.title ||
      !formData.duration ||
      !formData.releaseYear ||
      !formData.rating
    ) {
      setError(true);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await axios.put(`http://localhost:5050/${id}`, formData);
      setSuccess(true);
    } catch (error) {
      setError(error);
      setSuccess(false);
      console.error("Error updating movie: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="m-5 mb-4 text-4xl font-bold">Movie Info</h1>

      <div className="mx-5 flex w-sm flex-col gap-x-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-1">
          <label htmlFor="title" className="flex flex-col font-medium">
            Title
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              className="rounded-lg border border-gray-300 p-2 font-normal outline-none"
              onChange={handleInputChange}
              required
            />
          </label>

          <label htmlFor="duration" className="flex flex-col font-medium">
            Duration
            <input
              type="text"
              name="duration"
              id="duration"
              value={formData.duration}
              className="rounded-lg border border-gray-300 p-2 font-normal outline-none"
              onChange={handleInputChange}
              required
            />
          </label>

          <label htmlFor="releaseYear" className="flex flex-col font-medium">
            Released on
            <input
              type="text"
              name="releaseYear"
              id="releaseYear"
              value={formData.releaseYear}
              className="rounded-lg border border-gray-300 p-2 font-normal outline-none"
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="rating" className="flex flex-col font-medium">
            Rating
            <input
              type="text"
              name="rating"
              id="rating"
              value={formData.rating}
              className="rounded-lg border border-gray-300 p-2 font-normal outline-none"
              onChange={handleInputChange}
              required
            />
          </label>
          <button
            type="submit"
            className="cursor-pointer rounded-sm border border-gray-300 p-1.5 transition duration-200 hover:bg-gray-200 active:bg-gray-300"
          >
            Save
          </button>
        </form>

        <div className="mt-5 flex items-center justify-center">
          {loading && <Spinner />}

          {!loading && error && <ErrorMessage error={error} />}

          {!loading && !error && success && (
            <SuccessMessage message="Saved successfully!" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieEdit;

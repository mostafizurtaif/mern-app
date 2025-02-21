import { useState } from "react";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";
import Spinner from "./Spinner";

const MovieAdd = () => {
  const [formData, setFormData] = useState({
    title: "",
    duration: 0,
    releaseYear: 0,
    rating: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleInputChange = (event) => {
    setShowMessage(false);

    const { name, value } = event.target;

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
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:5050/", formData);

      setError(false);
      setShowMessage(true);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="m-5 mb-4 text-4xl font-bold">Movie List</h1>

      <div className="mx-5 flex w-sm flex-col gap-x-2">
        <form className="flex flex-col gap-y-1" onSubmit={handleSubmit}>
          <label htmlFor="title" className="flex flex-col font-medium">
            Title
            <input
              type="text"
              name="title"
              id="title"
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

          {!loading && !error && showMessage && (
            <SuccessMessage message="Movie added successfully!" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieAdd;

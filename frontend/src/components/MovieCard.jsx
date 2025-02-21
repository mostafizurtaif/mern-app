import {
  MdDelete,
  MdInfo,
  MdEdit,
  MdOutlineMovie,
  MdOutlineHourglassEmpty,
} from "react-icons/md";
import { SiRottentomatoes } from "react-icons/si";
import { formatTime } from "../utils/formatTime.js";
import { Link } from "react-router-dom";
import deleteMovie from "./deleteMovie.js";

const MovieCard = ({
  _id,
  title,
  duration,
  releaseYear,
  rating,
  setMovies,
}) => {
  return (
    <div className="rounded-lg border border-gray-300 p-3.5">
      <div className="flex flex-col gap-y-1">
        <div className="flex items-baseline gap-x-1.5">
          <div className="relative top-1.5">
            <MdOutlineMovie className="text-xl" />
          </div>
          {title} ({releaseYear}){" "}
        </div>

        <div className="flex items-baseline">
          <div className="relative top-1.5 right-[3px]">
            <MdOutlineHourglassEmpty className="text-[25px]" />
          </div>
          {formatTime(duration)}
        </div>

        <div className="flex items-baseline gap-x-1.5">
          <div className="relative top-1">
            <SiRottentomatoes className="text-[19px]" />
          </div>
          {rating + "%"}
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex gap-2">
          <Link
            to={`/movie/details/${_id}`}
            className="flex items-center justify-between"
          >
            <MdInfo className="text-2xl text-blue-500 transition duration-150 hover:text-blue-700" />
          </Link>

          <Link
            to={`/movie/edit/${_id}`}
            className="flex items-center justify-between"
          >
            <MdEdit className="text-2xl text-amber-500 transition duration-150 hover:text-amber-700" />
          </Link>

          <MdDelete
            className="cursor-pointer text-2xl text-red-500 transition duration-150 hover:text-red-700"
            onClick={() => {
              deleteMovie(_id, setMovies);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

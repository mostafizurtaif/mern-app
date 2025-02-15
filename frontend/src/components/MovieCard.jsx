import {
  MdDelete,
  MdInfo,
  MdEdit,
  MdOutlineMovie,
  MdOutlineHourglassEmpty,
} from "react-icons/md";
import { SiRottentomatoes } from "react-icons/si";
import { formatTime } from "../utils/formatTime.js";

const MovieCard = ({ title, duration, releaseYear, rating }) => {
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
          <a href="/" className="flex items-center justify-between">
            <MdInfo className="text-2xl text-blue-500 transition duration-150 hover:text-blue-700" />
          </a>

          <a href="/" className="flex items-center justify-between">
            <MdEdit className="text-2xl text-amber-500 transition duration-150 hover:text-amber-700" />
          </a>

          <a href="/" className="flex items-center justify-between">
            <MdDelete className="text-2xl text-red-500 transition duration-150 hover:text-red-700" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

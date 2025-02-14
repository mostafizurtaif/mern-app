const validateMovie = ({ title, duration, releaseYear, rating }) => {
  const errors = [];

  // Validate required fields
  if (!title || !duration || !releaseYear || !rating) {
    errors.push("All fields are required!");
  }

  // Validate data types
  if (typeof title != "string") {
    errors.push("Title must be a string!");
  }
  if (typeof duration != "number" || !Number.isInteger(duration)) {
    errors.push("Duration must be an integer!");
  }
  if (typeof releaseYear != "number" || !Number.isInteger(duration)) {
    errors.push("Release year must be a number!");
  }
  if (typeof rating != "number") {
    errors.push("Rating must be a number!");
  }

  // Validate duration
  if (duration < 1) {
    errors.push("Duration must be at least 1 minute!");
  }

  // Validate release year
  const currentYear = new Date().getFullYear();
  if (releaseYear < 1900 || releaseYear > currentYear) {
    errors.push(`Release year must be between 1900 and ${currentYear}`);
  }

  // Validate rating
  if (rating < 0 || rating > 100) {
    errors.push("Rating must be between 0 and 100.");
  }

  return errors;
};

export default validateMovie;

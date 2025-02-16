const ErrorMessage = (error) => {
  return (
    <div className="m-5 rounded-xl border border-red-500 p-3 font-bold text-red-500">
      {error.message || "An error occurred while fetching movies!"}
    </div>
  );
};

export default ErrorMessage;

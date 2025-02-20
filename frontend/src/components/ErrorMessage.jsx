const ErrorMessage = (error) => {
  return (
    <div className="m-5 inline-block rounded-xl border border-red-500 p-3 font-bold text-red-500">
      {error.message || "Error!"}
    </div>
  );
};

export default ErrorMessage;

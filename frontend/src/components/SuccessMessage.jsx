const SuccessMessage = ({ message }) => {
  return (
    <div className="m-5 inline-block rounded-xl border border-green-500 p-3 font-bold text-green-500">
      {message || "Success!"}
    </div>
  );
};

export default SuccessMessage;

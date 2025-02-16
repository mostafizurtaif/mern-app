const Spinner = () => {
  return (
    <div>
      <span className="relative flex size-10">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      </span>
    </div>
  );
};

export default Spinner;

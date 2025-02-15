const Spinner = () => {
  return (
    <div>
      <span class="relative flex size-10">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
      </span>
    </div>
  );
};

export default Spinner;

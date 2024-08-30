export const Spinner = () => {
  return (
    <div className="w-full mt-10 flex justify-center items-center gap-4">
      <span className="animate-bounce size-4 bg-sky-400 rounded-full delay-0"></span>
      <span className="animate-bounce size-4 bg-sky-500 rounded-full delay-500"></span>
      <span className="animate-bounce size-4 bg-sky-600 rounded-full delay-1000"></span>
    </div>
  );
};

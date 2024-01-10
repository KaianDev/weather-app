import Loading from "./Loading";

const PreLoading = () => {
  return (
    <div className="w-full h-screen bg-sky-500 flex flex-col justify-center items-center">
      <div className="size-20 border-8 border-l-transparent border-t-transparent rounded-full relative animate-spin border-sky-700">
        <div className="absolute top-0 size-16 border-4 border-r-transparent border-l-transparent rounded-full border-sky-600 animate-spin"></div>
      </div>
      <Loading />
    </div>
  );
};

export default PreLoading;

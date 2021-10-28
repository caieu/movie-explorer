export const MovieDetailSkeleton = () => {
  return (
    <>
      <div className="container mx-auto md:p-8 animate-pulse">
        <div className="flex flex-col space-y-2 pt-2 md:flex-row md:space-x-2 md:space-y-0">
          <div className="w-56 mx-auto h-96 bg-gray-300" />
          <div className="w-full bg-gray-300 shadow overflow-hidden sm:rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

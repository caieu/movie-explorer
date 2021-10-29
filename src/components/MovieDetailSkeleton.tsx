export const MovieDetailSkeleton = () => {
  return (
    <>
      <div className="container mx-auto md:p-8 animate-pulse">
        <div className="flex flex-col space-y-2 pt-2 md:flex-row md:space-x-2 md:space-y-0">
          <div className="w-64 md:w-80 mx-auto h-96 bg-gray-300 rounded-lg" />
          <div className="w-full bg-gray-300 shadow overflow-hidden rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

import { useParams } from "react-router-dom";
import { useGetMovieDetail } from "../api/moviedb";
import { Genre } from "../types/Genre";
import { Header } from "./Header";
import { MovieDetailSkeleton } from "./MovieDetailSkeleton";

type MovieDetailParams = {
  id: string;
};

export const MovieDetail = () => {
  let { id } = useParams<MovieDetailParams>();
  const { movie } = useGetMovieDetail(id);
  return (
    <>
      <Header />
      <div className="container mx-auto md:p-8">
        {movie ? (
          <div className="flex flex-col space-y-2 pt-4 md:pt-0 md:flex-row md:space-x-2 md:space-y-0">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-80 mx-auto rounded-lg"
            />
            <div className="bg-white shadow overflow-hidden sm:rounded-lg w-full">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {movie.title}
                </h3>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0 text-left">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="flex flex-col md:flex-row py-4 sm:py-5 sm:px-6">
                    <div className="text-sm font-medium text-gray-500 w-28">
                      Release Date
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {movie.release_date}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row py-4 sm:py-5 sm:px-6">
                    <div className="text-sm font-medium text-gray-500 w-28">
                      Rating
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {movie.vote_average}
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row py-4 sm:py-5 sm:px-6">
                    <div className="text-sm font-medium text-gray-500 w-28">
                      Genres
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {movie.genres?.map((genre: Genre) => (
                        <div key={genre.id} className="pb-2 pr-2 inline-flex">
                          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                            {genre.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col nmd:flex-row py-4 sm:py-5 sm:px-6">
                    <div className="text-sm font-medium text-gray-500 w-28">
                      Overview
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {movie.overview}
                    </div>
                  </div>
                  {movie.homepage && (
                    <div className="flex flex-col md:flex-row py-4 sm:py-5 sm:px-6">
                      <div className="text-sm font-medium text-gray-500 w-28">
                        Homepage
                      </div>
                      <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <a
                          href={movie.homepage}
                          className="text-gray-500 hover:text-gray-500"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {movie.homepage}
                        </a>
                      </div>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>
        ) : (
          <MovieDetailSkeleton />
        )}
      </div>
    </>
  );
};

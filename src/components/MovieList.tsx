import { Movie } from "../types/Movie";
import { MovieItem } from "./MovieItem";
import { MovieItemSkeleton } from "./MovieItemSkeleton";

interface MovieListProps {
  movies: Movie[];
  loading: boolean;
}

export const MovieList = ({ movies, loading }: MovieListProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 justify-items-center p-2 md:p-4">
      {loading ? (
        <>
          <MovieItemSkeleton />
          <MovieItemSkeleton />
          <MovieItemSkeleton />
          <MovieItemSkeleton />
          <MovieItemSkeleton />
          <MovieItemSkeleton />
          <MovieItemSkeleton />
          <MovieItemSkeleton />
          <MovieItemSkeleton />
        </>
      ) : (
        movies.map(({ title, poster_path, id }) => (
          <MovieItem key={id} title={title} posterPath={poster_path} id={id} />
        ))
      )}
    </div>
  );
};

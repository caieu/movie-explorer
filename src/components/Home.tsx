import { useState, useCallback } from "react";
import { usePopularMovies, useSearchMovies } from "../api/moviedb";
import { Hero } from "./Hero";
import { MovieList } from "./MovieList";
import { RatingFilter } from "./RatingFilter";
import { useDebouncedCallback } from "use-lodash-debounce";
import { Movie } from "../types/Movie";

export const Home = () => {
  const [query, setQuery] = useState("");
  const [rate, setRating] = useState(0);
  const { discoverMovies, loading } = usePopularMovies();
  const { searchMovies, loading: searchLoading } = useSearchMovies(query);
  const debouncedSetQuery = useDebouncedCallback(setQuery, 800);

  const getMovies = useCallback((): Movie[] => {
    console.log("movies");
    let movies: Movie[] = [];
    if (!query && discoverMovies) {
      movies = discoverMovies;
    } else if (query && searchMovies) {
      movies = searchMovies;
    }
    return movies.filter((movie) =>
      rate === 0 ? true : movie.vote_average <= rate * 2
    );
  }, [discoverMovies, query, searchMovies, rate]);
  return (
    <div className="mb-auto">
      <Hero onSearch={debouncedSetQuery} />
      <RatingFilter onFilter={setRating} selected={rate} />
      <MovieList movies={getMovies()} loading={loading || searchLoading} />
    </div>
  );
};

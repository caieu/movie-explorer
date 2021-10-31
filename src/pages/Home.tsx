import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-lodash-debounce";
import { usePopularMovies, useSearchMovies } from "../api/moviedb";
import { Hero } from "../components/Hero";
import { MovieList } from "../components/MovieList";
import { RatingFilter } from "../components/RatingFilter";
import { Movie } from "../types/Movie";

export const Home = () => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const [rate, setRating] = useState(0);
  const { discoverMovies, loading } = usePopularMovies();
  const { searchMovies, loading: searchLoading } = useSearchMovies(query);
  const debouncedSetQuery = useDebouncedCallback(setQuery, 500);

  useEffect(() => {
    let movies: Movie[] = [];
    if (!searchMovies && discoverMovies) {
      movies = discoverMovies;
    } else if (searchMovies) {
      movies = searchMovies;
    }
    if (rate > 0) {
      movies = movies.filter((movie) =>
        rate === 0 ? true : movie.vote_average <= rate * 2
      ); 
    }
    setFilteredMovies(movies);
  }, [discoverMovies, rate, searchMovies]);

  return (
    <div className="mb-auto">
      <Hero onSearch={debouncedSetQuery} />
      <RatingFilter onFilter={setRating} selected={rate} />
      <MovieList movies={filteredMovies} loading={loading || searchLoading} />
    </div>
  );
};

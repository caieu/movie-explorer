import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_THEMOVIEDB_KEY,
  },
});

export const usePopularMovies = () => {
  const [discoverMovies, setDiscoverMovies] = useState<Movie[] | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function get() {
      try {
        setLoading(true);
        const response = await instance.get(
          "discover/movie?include_adult=false"
        );
        setDiscoverMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, []);

  return { discoverMovies, loading };
};

export const useSearchMovies = (query: string) => {
  const [searchMovies, setSearchMovies] = useState<Movie[] | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!query) {
      setSearchMovies(undefined)
      return;
    };
    async function get() {
      try {
        setLoading(true);
        const response = await instance.get(
          `search/movie?query=${query}&include_adult=false`
        );
        setSearchMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, [query]);

  return { searchMovies, loading };
};

export const useGetMovieDetail = (id: string) => {
  const [movie, setMovie] = useState<Movie | undefined>();
  useEffect(() => {
    if (!id) return;
    async function get() {
      try {
        const response = await instance.get(`movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, [id]);

  return { movie };
};

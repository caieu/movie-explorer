import { Genre } from "./Genre";

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview?: string;
  homepage?: string;
  genres?: Genre[];
  release_date?: string;
};

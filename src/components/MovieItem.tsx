import { Link } from "react-router-dom";

interface MovieItemProps {
  title: string;
  posterPath: string;
  id: number;
}

export const MovieItem = ({ title, posterPath, id }: MovieItemProps) => {
  return (
    <Link to={`/movie/${id}`}>
      {posterPath ? (
        <img
          src={`https://image.tmdb.org/t/p/original${posterPath}`}
          alt={title}
          className="w-40 h-60 cursor-pointer rounded-lg"
        />
      ) : (
        <div className="bg-gray-400 w-40 h-60 flex items-center justify-center p-2 cursor-pointer rounded-lg">
          {title}
        </div>
      )}
    </Link>
  );
};

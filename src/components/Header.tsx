import { Film } from "../icons/Film";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to="/">
      <div className="flex w-full bg-gray-700 pl-10 py-6 items-center space-x-4">
        <Film />
        <div className="text-white font-bold">Movie Explorer</div>
      </div>
    </Link>
  );
};

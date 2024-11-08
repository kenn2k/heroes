import { Link } from "react-router-dom";
import SuperheroCard from "./card/SuperheroCard";

const Superhero = () => {
  return (
    <>
      <div className="container relative h-screen mx-auto">
        <h1 className="absolute flex flex-col items-center flex-none gap-4 p-3 text-3xl text-white transform -translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-xl top-36 left-1/2">
          You Have to Add Your Favorite Character !!!
          <span className="px-2 py-1 text-lg border-2 rounded-lg">
            <Link to="/create">Create</Link>
          </span>
        </h1>
        <div className="flex items-center justify-center h-full ">
          <SuperheroCard />
        </div>
      </div>
    </>
  );
};

export default Superhero;

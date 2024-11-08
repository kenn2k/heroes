import { Link } from "react-router-dom";
import SuperheroCard from "./card/SuperheroCard";

const Superhero = () => {
  return (
    <>
      <div className="container relative h-full mx-auto md:h-screen">
        <h1 className="flex flex-col items-center gap-4 p-3 text-3xl text-white bg-red-600 rounded-xl md:absolute md:top-36 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
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

import { useState } from "react";
import { useGetHeroes } from "../../../hooks/useHero";
import SuperheroCardItem from "./SuperheroCardItem";

const SuperheroCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: allHeroes } = useGetHeroes();
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentHeroes = allHeroes?.slice(startIndex, endIndex) || [];

  const totalPages = allHeroes ? Math.ceil(allHeroes.length / itemsPerPage) : 0;

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container px-4 mx-auto">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        {currentHeroes.length > 0 ? (
          currentHeroes.map((hero) => (
            <div
              key={hero.id}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <SuperheroCardItem
                key={hero.id}
                className="overflow-hidden bg-white rounded-lg shadow-md"
                nickname={hero.nickname}
                images={hero.images}
                id={hero.id}
              />
            </div>
          ))
        ) : (
          <li className="col-span-full">
            <div className="bg-[#2C2C2C] flex mt-20 p-4 text-lg items-center justify-center">
              <p className="text-[#C778DD]">No heroes</p>
            </div>
          </li>
        )}
      </ul>

      <div className="flex items-center justify-between px-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-6 py-2 text-white bg-gray-500 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages}
          className="px-6 py-2 text-white bg-gray-500 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SuperheroCard;

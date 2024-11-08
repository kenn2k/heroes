import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SuperheroCardItem = ({ nickname, images, id }) => {
  return (
    <li className="h-full">
      <div className="p-4 border rounded-lg shadow-md">
        <img
          src={images}
          alt={nickname}
          className="object-cover w-full h-48 mb-4 rounded-md sm:h-64"
        />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-bold text-center sm:text-2xl sm:text-left">
            {nickname}
          </h3>
          <Link
            className="text-center text-blue-500 sm:text-right"
            to={`/details/${id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </li>
  );
};

SuperheroCardItem.propTypes = {
  nickname: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default SuperheroCardItem;

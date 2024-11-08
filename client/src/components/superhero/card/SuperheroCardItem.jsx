import { Link } from "react-router-dom";

const SuperheroCardItem = ({ nickname, images, id }) => {
  return (
    <li className="">
      <div className="p-4 border rounded-lg shadow-md">
        <img
          src={images}
          alt={nickname}
          className="object-cover w-full h-64 mb-4 rounded-md"
        />
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold">{nickname}</h3>
          <Link className="text-blue-500" to={`/details/${id}`}>
            Details
          </Link>
        </div>
      </div>
    </li>
  );
};

export default SuperheroCardItem;

import { useNavigate, useParams } from "react-router-dom";
import { useGetHeroById } from "../../hooks/useHero";
import Card from "../UI/Card";

const SuperheroDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetHeroById(id);
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No hero found</p>;

  const {
    nickname,
    realName,
    originDescription,
    catchPhrase,
    superpowers,
    images,
  } = data;

  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center h-full px-[5%] ">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="p-2 mb-10 border-2 rounded-lg text-x"
        >
          Back
        </button>
        <Card>
          <img
            src={images}
            alt={nickname}
            className="object-contain w-full h-64 mb-4 "
          />
          <h2 className="text-3xl font-bold">{nickname}</h2>
          <p className="mt-2 text-gray-700">Real Name: {realName}</p>
          <p className="mt-2">{originDescription}</p>
          <p className="mt-2 italic">&quot;{catchPhrase}&quot;</p>
          <p className="mt-2 text-sm text-gray-500">
            Superpowers: {superpowers}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default SuperheroDetails;
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateHero } from "../../../hooks/useHero";
import { useForm } from "react-hook-form";
import data from "../../../../data.json";
const EditHeroForm = () => {
  const formData = data.formData;
  const {
    register,
    formState: { errors },
  } = useForm();

  const { id } = useParams();

  const { mutate } = useUpdateHero();

  const navigate = useNavigate();

  const handleEdit = (event) => {
    const formData = new FormData(event.target);
    const fields = Object.fromEntries(formData);
    mutate({ id, data: fields });
    navigate("/");
  };

  return (
    <div className="h-screen ">
      <div className="flex items-center justify-center h-full">
        <form
          onSubmit={handleEdit}
          className="flex flex-col gap-4 p-6 border-2 rounded-xl"
        >
          {formData.map(({ id, label, type, required }) => (
            <div key={id} className="flex flex-col ">
              <label htmlFor={id} className="text-sm font-medium">
                {label}
              </label>
              <input
                id={id}
                type={type}
                {...register(id, { required })}
                className="px-2 py-1 border rounded outline-none"
              />
              {errors[id] && (
                <p className="text-red-500">{errors[id].message}</p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="px-4 py-2 text-white bg-red-600 rounded"
          >
            Edit Hero
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditHeroForm;

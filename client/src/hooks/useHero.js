import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/superhero",
});
//* @Get
const fetchHero = async () => {
  const res = await api.get("/");
  return res.data;
};

export const useGetHeroes = () => {
  return useQuery({
    queryKey: ["get hero"],
    queryFn: fetchHero,
  });
};

const fetchHeroById = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};

export const useGetHeroById = (id) => {
  return useQuery({
    queryKey: ["get hero", id],
    queryFn: () => fetchHeroById(id),
    enabled: !!id,
  });
};

//* @Post
const postHero = async (data) => {
  const formData = new FormData();

  formData.append("nickname", data.nickname);
  formData.append("realName", data.realName);
  formData.append("originDescription", data.originDescription);
  formData.append("superpowers", data.superpowers);
  formData.append("catchPhrase", data.catchPhrase);
  formData.append("images", data.images);

  const res = await api.post("/upload", formData);

  return res.data;
};

export const useCreateHero = () => {
  const mutation = useMutation({
    mutationKey: ["create hero"],
    mutationFn: postHero,
    onSuccess: () => {
      console.log("success");
    },
    onError: (error) => {
      console.error("Помилка при створенні героя:", error);
    },
  });
  return mutation;
};

// //* @Patch

// const patchHero = async (id, data) => {
//   const res = await
//   return res.data;
// };

// export const useEditHero = () => {
//   const mutation = useMutation({
//     mutationFn: (id, data) => patchHero(id, data),
//     onSuccess: () => {},
//     onError: (error) => {
//       console.error("Помилка при редагуванні героя:", error);
//     },
//   });
//   return mutation;
// };

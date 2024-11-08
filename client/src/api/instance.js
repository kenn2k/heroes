import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

//* @Get
export const fetchHeroes = async () => {
  const res = await api.get("/");
  return res.data;
};

//* @Get hero by ID
export const fetchHeroById = async (id) => {
  const res = await api.get(`/${id}`);
  return res.data;
};

//* @Post
export const postHero = async (data) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => formData.append(key, value));
  const res = await api.post("/upload", formData);
  return res.data;
};

//* @Patch
export const patchHero = async ({ id, data }) => {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => formData.append(key, value));
  const res = await api.patch(`/update/${id}`, formData);
  return res.data;
};

//* @Delete
export const deleteHero = async (id) => {
  const res = await api.delete(`/delete/${id}`);
  return res.data;
};

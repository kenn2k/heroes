import { useQuery, useMutation } from "@tanstack/react-query";
import {
  deleteHero,
  fetchHeroById,
  fetchHeroes,
  patchHero,
  postHero,
} from "./config/api";

//* @Get
export const useGetHeroes = () => {
  return useQuery({
    queryKey: ["get heroes"],
    queryFn: fetchHeroes,
  });
};

//* @Get one by id
export const useGetHeroById = (id) => {
  return useQuery({
    queryKey: ["get hero", id],
    queryFn: () => fetchHeroById(id),
    enabled: !!id,
  });
};

//* @Post
export const useCreateHero = () => {
  return useMutation({
    mutationKey: ["create hero"],
    mutationFn: postHero,
    onSuccess: () => {
      console.log("Hero created successfully");
    },
    onError: (error) => {
      console.error("Error creating hero:", error);
    },
  });
};

//* @Patch
export const useUpdateHero = () => {
  return useMutation({
    mutationKey: ["update hero"],
    mutationFn: patchHero,
    onSuccess: () => {
      console.log("Hero updated successfully");
    },
    onError: (error) => {
      console.error("Error updating hero:", error);
    },
  });
};

//* @Delete
export const useDeleteHero = () => {
  return useMutation({
    mutationKey: ["delete hero"],
    mutationFn: deleteHero,
    onSuccess: () => {
      console.log("Hero deleted successfully");
    },
    onError: (error) => {
      console.error("Error deleting hero:", error);
    },
  });
};

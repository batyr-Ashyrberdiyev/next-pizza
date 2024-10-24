import { Ingredient, Product } from '@prisma/client';
import { axiosInstance } from './instatnce';
import { ApiRoutes } from './constants';

export const getAll = async (): Promise<Ingredient[]> => {
  const { data } = await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS);

  return data;
};

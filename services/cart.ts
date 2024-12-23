import { Cart } from '@prisma/client';
import { axiosInstance } from './instatnce';
import { CartDTO } from './dto/cart.dto';

export const fetchCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>('/cart');

  return data;
};

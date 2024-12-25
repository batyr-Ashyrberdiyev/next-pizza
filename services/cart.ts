import { CartDTO } from './dto/cart.dto';
import { axiosInstance } from './instatnce';

export const getCart = async (): Promise<CartDTO> => {
  const { data } = await axiosInstance.get<CartDTO>('/cart');

  return data;
};

export const updateItemQuantity = async (id: number, quantity: number): Promise<CartDTO> => {
  const { data } = await axiosInstance.patch<CartDTO>('/cart/' + id, { quantity });

  return data;
};

export const removeCartItem = async (id: number) => {
  return (await axiosInstance.delete<CartDTO>('/cart/' + id)).data;
};

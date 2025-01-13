import { useEffect } from "react";
import { useCartStore } from "@/store/cart";
import { CartStateItem } from "@/lib/get-cart-details";
import { CreateCartItemValues } from "@/services/dto/cart.dto";

type ReturnProps = {
  loading: boolean;
  items: CartStateItem[];
  totalAmount: number;
  removeCartItem: (id: number) => void;
  addCartItem: (values: CreateCartItemValues) => void;
  onClickCountButton: (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => void;
  updateItemQuantity: (id: number, quantity: number) => void;
};

export const useCart = (): ReturnProps => {
  const cartState = useCartStore((state) => state);

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    cartState.updateItemQuantity(id, newQuantity);
  };

  useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return { ...cartState, onClickCountButton };
};

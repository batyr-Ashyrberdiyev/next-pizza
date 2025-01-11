"use client";

import { FC } from "react";
import toast from "react-hot-toast";
import { useCartStore } from "@/store/cart";
import { ProductWithRelations } from "@/@types/prisma";
import { ChooseProductForm, ChoosePizzaForm } from "./";

interface Props {
  product: ProductWithRelations;
  onSubmit?: VoidFunction;
}

export const ProductForm: FC<Props> = ({ product, onSubmit: _onSubmit }) => {
  const [addCatrItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCatrItem({
        productItemId: itemId,
        ingredients,
      });

      _onSubmit?.();

      toast.success(product.name + "добавлена в корзину");
    } catch (error) {
      console.error(error);
      toast.success("Не удалось добавить товар в корзину");
    }
  };

  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);

  if (isPizzaForm) {
    return (
      <ChoosePizzaForm
        imageUrl={product.imageUrl}
        name={product.name}
        ingredients={product.ingredients}
        items={product.items}
        onSubmit={onSubmit}
        loading={loading}
      />
    );
  }

  return (
    <ChooseProductForm
      name={product.name}
      onSubmit={onSubmit}
      price={firstItem.price}
      imageUrl={product.imageUrl}
      loading={loading}
    />
  );
};

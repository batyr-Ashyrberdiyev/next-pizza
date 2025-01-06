"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { ChoosePizzaForm, ChooseProductForm } from "../../shared";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/store/cart";
import toast from "react-hot-toast";

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(product.items[0].pizzaType);

  const [addCatrItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  console.log(product);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCatrItem({
        productItemId: itemId,
        ingredients,
      });

      toast.success(product.name + "добавлена в корзину");
      router.back();
    } catch (error) {
      console.error(error);
      toast.success("Не удалось добавить товар в корзину");
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            ingredients={product.ingredients}
            items={product.items}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            name={product.name}
            onSubmit={onSubmit}
            price={firstItem.price}
            imageUrl={product.imageUrl}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

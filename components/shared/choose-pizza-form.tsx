"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { getPizzaDetails } from "@/lib";
import { PizzaType } from "@/constantans/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { usePizzaOptions } from "@/hooks/use-pizza-options";
import { GroupVariants, IngredientItem, Title, PizzaImage } from "./";

interface Props {
  name: string;
  loading?: boolean;
  imageUrl: string;
  className?: string;
  items: ProductItem[];
  ingredients: Ingredient[];
  onSubmit: (itemId: number, ingredients: number[]) => void;
}

export const ChoosePizzaForm: FC<Props> = ({
  name,
  items,
  loading,
  onSubmit,
  imageUrl,
  className,
  ingredients,
}) => {
  const {
    size,
    type,
    setType,
    currentItemId,
    addIngredient,
    selectedIngredients,
  } = usePizzaOptions(items);

  const { totalPrice, textDetails } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const handleClickAdd = () => {
    if (currentItemId) {
      onSubmit(currentItemId, Array.from(selectedIngredients));
    }
  };

  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#F7F6F5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400 mb-4">{textDetails}</p>

        <div className="flex flex-col gap-3 mt-5">
          <GroupVariants
            items={PizzaType}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaType)}
          />

          <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
            <div className="grid grid-cols-3 gap-3">
              {ingredients.map((ingredient) => (
                <IngredientItem
                  key={ingredient.id}
                  {...ingredient}
                  active={selectedIngredients.has(ingredient.id)}
                  onClick={() => addIngredient(ingredient.id)}
                />
              ))}
            </div>
          </div>
        </div>

        <Button
          loading={loading}
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {totalPrice} ₱
        </Button>
      </div>
    </div>
  );
};

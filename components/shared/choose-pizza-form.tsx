"use client";

import { FC } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { GroupVariants, IngredientItem, Title, PizzaImage } from "./";
import { PizzaSize, PizzaType } from "@/constantans/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { getPizzaDetails } from "@/lib";
import { usePizzaOptions } from "@/hooks/use-pizza-options";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: ProductItem[];
  onClickAddCart?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: FC<Props> = ({
  className,
  imageUrl,
  name,
  ingredients,
  items,
  onClickAddCart,
}) => {
  const {
    size,
    type,
    setSize,
    setType,
    addIngredient,
    selectedIngredients,
    availableSizes,
  } = usePizzaOptions(items);

  const { totalPrice, textDetails } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const handleClickAdd = () => {
    onClickAddCart?.();

    console.log({
      size,
      type,
      ingredients: selectedIngredients,
    });
  };

  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#F7F6F5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-3 mt-5">
          <GroupVariants
            items={availableSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
          />

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
          onClick={handleClickAdd}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {totalPrice} ₱
        </Button>
      </div>
    </div>
  );
};

"use client";

import { FC, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { GroupVariants, IngredientItem, Title, PizzaImage } from "./";
import {
  mapPizzaType,
  PizzaSize,
  pizzaSizes,
  PizzaType,
} from "@/constantans/pizza";
import { Ingredient } from "@prisma/client";
import { useSet } from "react-use";
import { CloudLightning } from "lucide-react";

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items: any[];
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChoosePizzaForm: FC<Props> = ({
  className,
  imageUrl,
  name,
  ingredients,
  items,
  onClickAdd,
}) => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(
    new Set<number>([])
  );

  const textDetails = `${size} см, традицицонное тесто ${mapPizzaType[type]}`;

  const pizzaPrice = items.find(
    (item) => item.pizzaType === type && item.size === size
  )!.price;
  const totalIngredientsPrice = ingredients
    .filter((ingr) => selectedIngredients.has(ingr.id))
    .reduce((acc, ingr) => acc + ingr.price, 0);

  const totalPrice = pizzaPrice + totalIngredientsPrice;

  console.log(items);

  return (
    <div className={cn("flex flex-1", className)}>
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] bg-[#F7F6F5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <div className="flex flex-col gap-3 mt-5">
          <GroupVariants
            items={pizzaSizes}
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
                  onClick={() => toggleIngredients(ingredient.id)}
                />
              ))}
            </div>
          </div>
        </div>
        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₱
        </Button>
      </div>
    </div>
  );
};

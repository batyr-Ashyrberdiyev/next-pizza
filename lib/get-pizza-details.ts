import { mapPizzaType, PizzaSize, PizzaType } from "@/constantans/pizza";
import { calcTotalPizzaPrice } from "./calc-total-pizza-price";
import { Ingredient, ProductItem } from "@prisma/client";
import { ingredients } from "@/prisma/constants";

export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );
  const textDetails = `${size} см, традицицонное тесто ${mapPizzaType[type]}`;

  return { totalPrice, textDetails };
};

import { PizzaSize, PizzaType } from "@/constantans/pizza";
import { Ingredient, ProductItem } from "@prisma/client";

export const calcTotalPizzaPrice = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)
      ?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingr) => selectedIngredients.has(ingr.id))
    .reduce((acc, ingr) => acc + ingr.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};

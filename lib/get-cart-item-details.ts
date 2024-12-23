import { mapPizzaType, PizzaSize, PizzaType } from "@/constantans/pizza";
import { Ingredient } from "@prisma/client";

export const getCartItemDetails = (
  pizzaType: PizzaType,
  pizzaSize: PizzaSize,
  ingredients: Ingredient[]
) => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapPizzaType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((item) => item.name));
  }

  return details.join(", ");
};

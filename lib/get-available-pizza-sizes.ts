import { Variant } from "@/components/shared/group-variants";
import { pizzaSizes, PizzaType } from "@/constantans/pizza";
import { ProductItem } from "@prisma/client";

export const getAvailablePizzaSizes = (
  type: PizzaType,
  items: ProductItem[]
): Variant[] => {
  const filteredPizzasbyType = items.filter((item) => item.pizzaType === type);

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasbyType.some(
      (pizza) => Number(pizza.size) === Number(item.value)
    ),
  }));
};

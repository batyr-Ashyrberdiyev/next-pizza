import { Variant } from "@/components/shared/group-variants";
import { PizzaSize, PizzaType } from "@/constantans/pizza";
import { getAvailablePizzaSizes } from "@/lib";
import { ProductItem } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  currentItemId?: number;
  availableSizes: Variant[];
  selectedIngredients: Set<number>;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  addIngredient: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = useState<PizzaSize>(20);
  const [type, setType] = useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const availableSizes = getAvailablePizzaSizes(type, items);

  const currentItemId = items.find(
    (item) => item.pizzaType === type && item.size === size
  )?.id;

  useEffect(() => {
    const isAvailableSize = availableSizes.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availableSizes.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize);
    }
  }, [type]);

  return {
    size,
    type,
    setType,
    setSize,
    currentItemId,
    addIngredient,
    availableSizes,
    selectedIngredients,
  };
};

'use client';

import { FC, useState } from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { GroupVariants, ProductImage, IngredientItem, Title } from './';
import { PizzaSize, pizzaSizes, PizzaType } from '@/constantans/pizza';
import { Ingredient } from '@prisma/client';
import { useSet } from 'react-use';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: Ingredient[];
  items?: any[];
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

  const textDetails = '30 см, традицицонное тесто 30';
  const totalPrice = 350;

  const [selectedIngredients, { toggle: toggleIngredients }] = useSet(new Set<number>([]));

  return (
    <div className={cn('flex flex-1', className)}>
      <ProductImage imageUrl={imageUrl} size={size} />

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

'use client';

import { FC, useEffect, useState } from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import useFilterIngredients from '@/hooks/use-filter-ingredients';
import { useSet } from 'react-use';
import qs from 'qs';
import { useRouter, useSearchParams } from 'next/navigation';

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const Filters: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients();

  const [prices, setPrice] = useState<PriceProps>({
    priceFrom: Number(searchParams.get('priceFrom')) || undefined,
    priceTo: Number(searchParams.get('priceTo')) || undefined,
  });

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]));

  const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };

  useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIds),
    };

    const query = qs.stringify(filters, {
      arrayFormat: 'comma',
    });

    router.push(`?${query}`, { scroll: false });
  }, [prices, pizzaTypes, sizes, selectedIds, router]);

  return (
    <div className="">
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <CheckboxFiltersGroup
        title="Размеры"
        name="sizes"
        className="mb-5"
        onClickCheckbox={toggleSizes}
        items={[
          {
            text: '20 см',
            value: '20',
          },
          {
            text: '30 см',
            value: '30',
          },
          {
            text: '40 см',
            value: '40',
          },
        ]}
      />

      <CheckboxFiltersGroup
        title="Тип теста"
        name="types"
        className="mb-5"
        onClickCheckbox={togglePizzaTypes}
        items={[
          {
            text: 'Тонкое',
            value: '1',
          },
          {
            text: 'Традиционное',
            value: '2',
          },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            defaultValue={0}
            onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom || 0, prices.priceTo || 1000]}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты:"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIds}
      />
    </div>
  );
};

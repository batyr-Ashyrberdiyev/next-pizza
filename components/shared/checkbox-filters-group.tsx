'use client';

import React, { ChangeEvent, useState } from 'react';

import { FilterCheckbox, FilterChecboxProps } from './filter-checkbox';
import { Input, Skeleton } from '../ui';
import { motion } from 'framer-motion';

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  loading?: boolean;
  onClickCheckbox?: (id: string) => void;
  selected?: Set<string>;
  defaultValue?: string[];
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onClickCheckbox,
  loading,
  selected,
  defaultValue,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : (defaultItems || items).slice(0, limit);

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (loading) {
    return (
      <div className="mt-5">
        <p className="font-bold mb-3">{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />)}
      </div>
    );
  }

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
            onChange={onChangeSearchInput}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, i) => (
          <FilterCheckbox
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            checked={selected?.has(item.value)}
            key={i}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            name={name}
          />
        ))}
      </div>

      {items.length > limit && (
        <motion.div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-6">
            {showAll ? 'Скрыть' : 'Показать все'}
          </button>
        </motion.div>
      )}
    </div>
  );
};

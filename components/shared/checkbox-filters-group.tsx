"use client";

import React, { ChangeEvent, useState } from "react";

import { FilterCheckbox, FilterChecboxProps } from "./filter-checkbox";
import { Input } from "../ui";
import { AnimatePresence, motion } from "framer-motion";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  console.log(items);

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems?.slice(0, limit);

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

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
            // onCheckedChange={() => onCheckedChange(item.value)}
            checked={false}
            key={i}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <motion.div
          className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-6"
          >
            {showAll ? "Скрыть" : "Показать все"}
          </button>
        </motion.div>
      )}
    </div>
  );
};

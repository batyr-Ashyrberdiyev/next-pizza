'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useZusCategory } from '@/store/category';
import { Category } from '@prisma/client';

interface Props {
  className?: string;
  items: Category[];
}

export const Categories: React.FC<Props> = ({ className, items }) => {
  const activeId = useZusCategory((state) => state.activeId);

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {items.map(({ name, id }, index) => (
        <a
          href={`/#${name}`}
          key={index}
          className={cn(
            'flex items-center transition-all duration-300 font-bold h-11 rounded-2xl px-5',
            activeId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}>
          {name}
        </a>
      ))}
    </div>
  );
};

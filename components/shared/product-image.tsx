import { cn } from '@/lib/utils';
import React, { FC } from 'react';

interface Props {
  className?: string;
  src: string;
  size: number;
}

export const ProductImage: FC<Props> = ({ className, src, size = 20 }) => {
  return (
    <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
      <img
        src={src}
        alt="logo"
        className={cn('relative left-2 top-2 transition-all z-10 duration-300', {
          'size-[300px]': size === 20,
          'size-[400px]': size === 30,
          'size-[500px]': size === 40,
        })}
      />

      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 border-dashed border-2 rounded-full size-[450px] border-gray-200" />
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 border-dashed border-2 rounded-full size-[370px] border-gray-200" />
    </div>
  );
};

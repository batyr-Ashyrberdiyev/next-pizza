import { cn } from '@/lib/utils';
import { FC } from 'react';

type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface Props {
  items: readonly Variant[];
  defaultValue?: string;
  onClick: (value: Variant['value']) => void;
  selectedValue?: Variant['value'];
  className?: string;
}

export const GroupVariants: FC<Props> = ({ className, items, selectedValue, onClick }) => {
  return (
    <div className={cn('flex justify-between bg-[#F3F3F7] rounded-3xl p-1 select-none', className)}>
      {items.map((item) => (
        <button key={item.name} onClick={() => onClick?.(item.value)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

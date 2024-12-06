import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import { FC } from 'react';

interface Props {
  imageUrl: string;
  name: string;
  price: number;
  active?: boolean;
  onClick: () => void;
  className?: string;
}

export const IngredientItem: FC<Props> = ({
  className,
  imageUrl,
  name,
  price,
  active,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'flex items-center flex-col rounded-md p-1 text-center relative cursor-pointer shadow-md bg-white w-32',
        { 'border border-primary': active },
        className,
      )}>
      {active && <CircleCheck className="absolute top-2 right-2 text-primary" />}
      <img src={imageUrl} />
      <span className="text-sm mb-1">{name}</span>
      <span className="font-bold">{price} ₱</span>
    </div>
  );
};

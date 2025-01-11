import { FC } from 'react';
import { cn } from '@/lib/utils';
import { CountButton } from './';
import { Trash2Icon } from 'lucide-react';
import * as CartItem from './cart-item-details';
import { CartItemProps } from './cart-item-details/cart-item-details.types';

interface Props extends CartItemProps {
  className?: string;
  onCLickRemove?: VoidFunction;
  onClickCountButton: (type: 'plus' | 'minus') => void;
}

export const CartDrawerItem: FC<Props> = ({
  id,
  name,
  price,
  details,
  imageUrl,
  quantity,
  disabled,
  className,
  onCLickRemove,
  onClickCountButton,
}) => {
  return (
    <div
      className={cn(
        'flex bg-white p-5 gap-6',
        {
          'opacity-50 pointer-events-none': disabled,
        },
        className,
      )}>
      <CartItem.Image src={imageUrl} />

      <div className="flex-1 ">
        <CartItem.Info details={details} name={name} />

        <hr className="my-3" />

        <div className="flex  items-center justify-between">
          <CountButton value={quantity} onClick={onClickCountButton} />

          <div className="flex items-center gap-3">
            <CartItem.Price value={price} />
            <Trash2Icon
              onClick={onCLickRemove}
              className="text-gray-400 cursor-pointer hover:text-gray-600"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

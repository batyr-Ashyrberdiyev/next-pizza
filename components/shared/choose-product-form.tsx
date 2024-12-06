import { FC } from 'react';
import { ProductImage } from './product-image';
import { Title } from './title';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface Props {
  imageUrl: string;
  name: string;
  items?: any[];
  onClickAdd?: VoidFunction;
  className?: string;
}

export const ChooseProductForm: FC<Props> = ({ className, imageUrl, name, items, onClickAdd }) => {
  const textDetails = '30 см, традицицонное тесто 30';
  const totalPrice = 350;

  return (
    <div className={cn('flex flex-1', className)}>
      <ProductImage imageUrl={imageUrl} size={30} />

      <div className="w-[490px] bg-[#F7F6F5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
          Добавить в корзину за {totalPrice} ₱
        </Button>
      </div>
    </div>
  );
};

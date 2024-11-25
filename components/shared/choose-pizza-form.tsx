import { FC } from 'react';
import { ProductImage } from './product-image';
import { Title } from './title';
import { Button } from '../ui/button';

interface Props {
  imageUrl: string;
  name: string;
  ingredients: any[];
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
  const textDetails = '30 см, традицицонное тесто 30';
  const totalPrice = 350;

  return (
    <div className={className}>
      <ProductImage imageUrl={imageUrl} size={30} />

      <div className="w-[490px] bg-[#F7F6F5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <p className="text-gray-400">{textDetails}</p>

        <Button className="h-[55px] px-10 text-base rounded-[18px] w-full">
          Добавить в корзину за {totalPrice} ₱
        </Button>
      </div>
    </div>
  );
};

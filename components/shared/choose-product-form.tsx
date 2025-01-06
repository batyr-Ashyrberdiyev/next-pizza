import { FC } from "react";
import { ProductImage } from "./product-image";
import { Title } from "./title";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  items?: any[];
  loading?: boolean;
  price: number;
  imageUrl: string;
  className?: string;
  onSubmit?: VoidFunction;
}

export const ChooseProductForm: FC<Props> = ({
  name,
  items,
  price,
  loading,
  onSubmit,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn("flex flex-1", className)}>
      <ProductImage imageUrl={imageUrl} size={30} />

      <div className="w-[490px] bg-[#F7F6F5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />

        <Button
          loading={loading}
          onClick={() => onSubmit?.()}
          className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
        >
          Добавить в корзину за {price} ₱
        </Button>
      </div>
    </div>
  );
};

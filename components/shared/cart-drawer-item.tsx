import { cn } from "@/lib/utils";
import { FC } from "react";

import * as CartItem from "./cart-item-details";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CountButton } from "./";
import { Trash2Icon } from "lucide-react";

interface Props extends CartItemProps {
  className?: string;
  onClickCountButton: (type: "plus" | "minus") => void;
  onCLickRemove?: VoidFunction;
}

export const CartDrawerItem: FC<Props> = ({
  className,
  imageUrl,
  id,
  price,
  details,
  name,
  quantity,
  onClickCountButton,
  onCLickRemove,
}) => {
  return (
    <div className={cn("flex bg-white p-5 gap-6", className)}>
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

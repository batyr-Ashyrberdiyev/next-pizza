import { FC } from "react";
import { cn } from "@/lib/utils";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import * as CartItemDetails from "./cart-item-details";
import { X } from "lucide-react";

interface Props extends CartItemProps {
  className?: string;
  onClickRemove: () => void;
  onClickCountButton?: (type: "plus" | "minus") => void;
}

export const CheckoutItem: FC<Props> = ({
  name,
  price,
  details,
  disabled,
  imageUrl,
  quantity,
  className,
  onClickRemove,
  onClickCountButton,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center",
        { "opacity-50 pointer-events-none": disabled },
        className
      )}
    >
      <div className="flex items-center gap-5 flex-1">
        <CartItemDetails.Image src={imageUrl} />
        <CartItemDetails.Info details={details} name={name} />
      </div>

      <CartItemDetails.Price value={price} />

      <div className="flex items-center gap-5 ml-20">
        <CartItemDetails.CountButton
          onClick={onClickCountButton}
          value={quantity}
        />
        <button onClick={onClickRemove}>
          <X
            className="text-gray-400 cursor-pointer hover:text-gray-600"
            size={20}
          />
        </button>
      </div>
    </div>
  );
};

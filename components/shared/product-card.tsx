import Link from "next/link";
import { FC } from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  name: string;
  id: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: FC<Props> = ({
  className,
  name,
  id,
  price,
  imageUrl,
}) => {
  return (
    <div className={cn(className, "group")}>
      <Link href={"/product/" + id}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img
            width={215}
            height={215}
            src={imageUrl}
            alt={name}
            className="group-hover:scale-110 transition-all duration-300"
          />
        </div>
      </Link>

      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

      <p className="text-sm text-gray-400">
        Баварские колбаски, острый соус аджика, острые колбаски чоризо,
        цыпленок, пикантная пепперони, моцарелла, фирменный томатный соус
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          от <b>{price}</b>
        </span>

        <Button variant={"secondary"} className="text-base font-bold">
          <Plus size={20} className="mr-1" />
          Добавить
        </Button>
      </div>
    </div>
  );
};

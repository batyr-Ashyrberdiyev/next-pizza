import Link from "next/link";
import { FC } from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Ingredient } from "@prisma/client";

interface Props {
  name: string;
  id: number;
  price: number;
  imageUrl: string;
  className?: string;
  ingredients: Ingredient[];
}

export const ProductCard: FC<Props> = ({
  className,
  name,
  id,
  price,
  imageUrl,
  ingredients,
}) => {
  return (
    <div className={cn(className, "group min-h-[450px]")}>
      <div className="flex flex-col justify-between h-full">
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
        <div className="flex flex-col justify-between">
          <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

          <p className="text-sm text-gray-400 line-clamp-3">
            {ingredients.map((ingredient) => ingredient.name).join(", ")}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price}</b>
          </span>

          <Link href={"/product/" + id}>
            <Button variant={"secondary"} className="text-base font-bold">
              <Plus size={20} className="mr-1" />
              Добавить
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

"use client";

import { FC, useEffect } from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { useIntersectionObserver } from "usehooks-ts";
import { useZusCategory } from "@/store/category";

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductGroupList: FC<Props> = ({
  className,
  title,
  items,
  listClassName,
  categoryId,
}) => {
  const setActiveId = useZusCategory((state) => state.setActiveId);
  const activeId = useZusCategory((state) => state.activeId);
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.4,
  });

  useEffect(() => {
    if (isIntersecting) {
      setActiveId(categoryId);
    }
  }, [isIntersecting, categoryId]);

  console.log(activeId);

  return (
    <div className={className} id={title} ref={ref}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {items.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

'use client';

import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { ChooseProductForm } from '../choose-product-form';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  product: ProductWithRelations;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
  const router = useRouter();
  const isPizzaForm = Boolean(product.items[0].pizzaType);

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
        {isPizzaForm ? (
          'PizzaForm'
        ) : (
          <ChooseProductForm imageUrl={product.imageUrl} name={product.name} ingredients={[]} />
        )}
      </DialogContent>
    </Dialog>
  );
};

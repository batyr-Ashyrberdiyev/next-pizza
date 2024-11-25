'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Product } from '@prisma/client';
import { FC } from 'react';
import { Title } from '../title';
import { ChoosePizzaForm } from '../choose-pizza-form';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: FC<Props> = ({ className, product }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
        <Title text={product.name} />

        <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={[]} />
      </DialogContent>
    </Dialog>
  );
};

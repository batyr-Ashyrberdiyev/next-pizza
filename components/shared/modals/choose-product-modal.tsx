import { Dialog } from '@/components/ui/dialog';
import { Product } from '@prisma/client';
import { DialogContent } from '@radix-ui/react-dialog';
import { FC } from 'react';
import { Title } from '../title';

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProdctModal: FC<Props> = ({ className, product }) => {
  return (
    <Dialog>
      <DialogContent className="p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden">
        <Title text="Choose product" />
      </DialogContent>
    </Dialog>
  );
};

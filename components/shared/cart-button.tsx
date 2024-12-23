import { cn } from '@/lib/utils';
import { FC } from 'react';
import { Button } from '../ui';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';
import { CartDrawer } from './cart-drawer';

interface Props {
  className?: string;
}

export const CartButton: FC<Props> = ({ className }) => {
  return (
    <CartDrawer>
      <Button className="group relative">
        <b>502 р.</b>

        <span className="h-full w-[1px] bg-white/30 mx-3" />

        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart className="size-4 relative" strokeWidth={2} />
          <b>3</b>
        </div>
        <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
      </Button>
    </CartDrawer>
  );
};

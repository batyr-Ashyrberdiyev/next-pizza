'use client';

import Image from 'next/image';
import { CartButton, Container, SearchInput } from './';
import Link from 'next/link';
import { Button } from '../ui';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  hasCart?: boolean;
  hasSearch?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ className, hasSearch = true, hasCart = true }) => {
  return (
    <header className={className}>
      <Container className="flex border-b items-center justify-between py-8">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />

          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
          </div>
        </Link>

        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}
        <div className={cn('flex items-center gap-4', className)}>
          <Button variant="outline" className="flex items-center gap-3">
            <User size={16} />
            Войти
          </Button>

          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};

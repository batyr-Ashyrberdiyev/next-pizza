'use client';

import Image from 'next/image';
import { CartButton, Container, SearchInput } from './';
import Link from 'next/link';
import { Button } from '../ui';
import { User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface Props {
  className?: string;
}

type AnalyzeResult = {
  strings: number;
  numbers: number;
  booleans: boolean;
  objects: object;
  arrays: object;
};

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={className}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />

          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <SearchInput />
        </div>

        <div className={cn('flex items-center gap-4', className)}>
          <Button variant="outline" className="flex items-center gap-3">
            <User size={16} />
            Войти
          </Button>

          <CartButton />
        </div>
      </Container>
    </header>
  );
};

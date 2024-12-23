import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const body = (await req.json()) as { quantity: number };
    const token = req.cookies.get('cartToken')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Cart token not found' });
    }

    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: Number(id),
      },
    });
  } catch (error) {
    console.error('[CART_PATCH] Server error', error);
    return NextResponse.json({ message: 'Не удалось обновить корзину' }, { status: 500 });
  }
}

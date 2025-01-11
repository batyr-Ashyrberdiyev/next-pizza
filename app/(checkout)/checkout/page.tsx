import { Container, Title, WhiteBlock } from '@/components/shared';
import { FC } from 'react';

interface Props {
  className?: string;
}

export default function CheckoutPage() {
  return (
    <Container className="mt-5">
      <Title text="Оформление заказа" size="xl" className="font-extrabold mb-8" />

      <div className="flex gap-10">
        <div className="mb-20 flex flex-col gap-10 flex-1">
          <WhiteBlock title="1. Корзина">123123123123123</WhiteBlock>

          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-4 gap-5"></div>
          </WhiteBlock>

          <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5"></div>
          </WhiteBlock>
        </div>

        <div className="">34324</div>
      </div>
    </Container>
  );
}

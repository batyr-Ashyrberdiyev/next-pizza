'use client';

import {
  CheckoutItem,
  CheckoutItemDetails,
  CheckoutSidebar,
  Container,
  Title,
  WhiteBlock,
} from '@/components/shared';
import { Button, Input, Textarea } from '@/components/ui';
import { PizzaSize, PizzaType } from '@/constantans/pizza';
import { useCart } from '@/hooks';
import { getCartItemDetails } from '@/lib';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';

const VAT = 15;
const DELIVERY_PRICE = 250;

export default function CheckoutPage() {
  const { items, totalAmount, removeCartItem, onClickCountButton } = useCart();

  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;

  return (
    <Container className="mt-5">
      <Title text="Оформление заказа" size="xl" className="font-extrabold mb-8" />

      <div className="flex gap-10">
        <div className="mb-20 flex flex-col gap-10 flex-1">
          <WhiteBlock title="1. Корзина">
            <div className="flex flex-col gap-5">
              {items.map((item) => (
                <CheckoutItem
                  className="mb-2"
                  key={item.id}
                  id={item.id}
                  disabled={item.disabled}
                  imageUrl={item.imageUrl}
                  details={getCartItemDetails(
                    item.ingredients,
                    item.pizzaType as PizzaType,
                    item.pizzaSize as PizzaSize,
                  )}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                  onClickRemove={() => removeCartItem(item.id)}
                />
              ))}
            </div>
          </WhiteBlock>

          <WhiteBlock title="2. Персональные данные">
            <div className="grid grid-cols-2 gap-5">
              <Input name="firstname" className="text-base" placeholder="Имя" />
              <Input name="lastname" className="text-base" placeholder="Фамилия" />
              <Input name="email" className="text-base" placeholder="E-mail" />
              <Input name="phone" className="text-base" placeholder="Телефон" />
            </div>
          </WhiteBlock>

          <WhiteBlock title="3. Адрес доставки">
            <div className="flex flex-col gap-5">
              <Input name="firstname" className="text-base" placeholder="Имя" />
              <Textarea className="text-base" rows={5} placeholder="Комментарий к заказу" />
            </div>
          </WhiteBlock>
        </div>

        <div className="w-[450px]">
          <CheckoutSidebar totalAmount={totalAmount} />
        </div>
      </div>
    </Container>
  );
}

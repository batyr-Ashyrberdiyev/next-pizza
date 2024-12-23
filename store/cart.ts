export interface CartState {
  loading: boolean;
  error: boolean;
  totalAmount: number;
  items: ICartItems[];
  fetchCartItems: () => Promise<void>;
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  addCartItem: (values: CreatedCartItemValues) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
}

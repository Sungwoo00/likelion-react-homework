
export interface CartItem{
  id: number;
  src: string;
  title: string;
  price: number;
  quantity: number;
}

export const CartItems: CartItem[] = [
  {
    id: 1,
    src: "src/components/HW4.Cart/components/UI/image2.png",
    title: "1A 우유",
    price: 1800,
    quantity: 2,
  },
  {
    id: 2,
    src: "src/components/HW4.Cart/components/UI/image3.png",
    title: "맛있는 콩나물",
    price: 600,
    quantity: 2,
  },
  {
    id: 3,
    src: "src/components/HW4.Cart/components/UI/image4.png",
    title: "고소한 두부",
    price: 800,
    quantity: 2,
  }
]




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
    src: "src/components/HW4.Cart/components/UI/image2.jpg",
    title: "1A 우유 900mL",
    price: 1800,
    quantity: 2,
  },
  {
    id: 2,
    src: "src/components/HW4.Cart/components/UI/image3.jpg",
    title: "맛있는 콩나물 500g",
    price: 600,
    quantity: 3,
  },
  {
    id: 3,
    src: "src/components/HW4.Cart/components/UI/image4.jpg",
    title: "고소한 두부 1kg",
    price: 800,
    quantity: 5,
  }
]



import { use, useState } from 'react';
import ProductItem from './components/CartList/ProductItem'
import CartHeader from './components/Header/CartHeader'
import CartFooter from './components/Footer/CartFooter';
import { CartItems } from './data/CartItem';
import "@/styles/Cart/Cart.css"

function Cart() {

  const initialTotal = CartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  const [totalPrice, setTotalPrice] = useState(initialTotal);

  const handleTotalPriceChange = (newTotal: number)=> {
    setTotalPrice(newTotal);
  }


  return(
    <div className='cart'>
      <CartHeader />
      <ProductItem items={CartItems} onTotalPriceChange={handleTotalPriceChange}/>
      <CartFooter totalPrice={totalPrice}/>
    </div>
  )
}
export default Cart
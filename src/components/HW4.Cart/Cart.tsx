import { use, useState } from 'react';
import ProductItem from './components/CartList/ProductItem'
import CartHeader from './components/Header/CartHeader'
import CartFooter from './components/Footer/CartFooter';
import { CartItems } from './data/CartItem';
import "@/styles/Cart/Cart.css"

function Cart() {

  const [totalPrice, setTotalPrice] = useState(0);

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
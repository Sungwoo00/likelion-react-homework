import Line from '../UI/Line'
import CartTotal from './CartTotal'
import "@/styles/Cart/CartFooter.css"

interface CartFooter{
  totalPrice: number;
}

function CartFooter({totalPrice}:CartFooter) {

  return(
    <div className='cart-footer'>
      <Line />
      <CartTotal price={totalPrice}/>
    </div>
  )
}

export default CartFooter
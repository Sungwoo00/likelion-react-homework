import Line from '../UI/Line'
import CartTitle from './CartTitle'
import "@/styles/Cart/CartHeader.css"

function CartHeader () {

  return(
    <div className='cart-header'>
      <CartTitle />
      <Line />
    </div>
  )
}

export default CartHeader
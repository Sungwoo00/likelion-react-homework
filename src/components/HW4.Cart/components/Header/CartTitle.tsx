import SvgIcon from '../UI/SvgIcon'
import '@/styles/Cart/CartTitle.css'

function CartTitle () {

  return(
    <div className='cart-title'>
      <SvgIcon type="cart"/>
      <span>장바구니</span>
    </div>
  )
}
export default CartTitle
import "@/styles/Cart/CartTotal.css"

interface CartTotal{
  price: number;
}

function CartTotal({price}:CartTotal) {

  return(
    <span className='cart-total'>구매 총액:{price.toLocaleString()}원</span>
  )
}
export default CartTotal
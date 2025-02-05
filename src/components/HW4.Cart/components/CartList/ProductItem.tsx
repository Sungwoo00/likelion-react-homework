import Counter from '../Counter/Counter'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import { CartItems } from '@/components/HW4.Cart/data/CartItem'
import "@/styles/Cart/ProductItem.css"

function ProcudtItem () {

  return(
    <>   
    {CartItems.map((item)=>(
         <div key={item.id} className='product-item'>
         <ProductImage src={item.src} alt={`${item.title} 이미지`}/>
         <ProductInfo title={item.title} price={item.price}/>
         <Counter />
       </div>
       ))}

    </>

  )
}

export default ProcudtItem
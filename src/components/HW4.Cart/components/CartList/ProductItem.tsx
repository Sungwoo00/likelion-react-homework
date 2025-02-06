import { useState } from 'react'
import Counter from '../Counter/Counter'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
import { CartItem } from '@/components/HW4.Cart/data/CartItem'
import "@/styles/Cart/ProductItem.css"

interface ProductItem {
  items: CartItem[];
  onTotalPriceChange: (total:number) => void;
}

function ProductItem ({items, onTotalPriceChange}:ProductItem) {

  const [counts, setCounts] = useState(new Array(items.length).fill(0));

  const handleCountChange = (index: number, newCount: number) => {
    const newCounts = [...counts];
    newCounts[index] = newCount;
    setCounts(newCounts);
    
    const newTotal = newCounts.reduce((total, count, idx) => {
      return total + (count * items[idx].price);
    }, 0);
    
    onTotalPriceChange(newTotal);
  };

  return(
    <div>   
    {items.map((item,index)=>(
         <div key={item.id} className='product-item'>
         <ProductImage src={item.src} alt={`${item.title} 이미지`}/>
         <ProductInfo title={item.title} price={item.price}/>
         <Counter count={counts[index]} quantity={item.quantity} 
         onCountChange={(newCount)=> handleCountChange(index,newCount)}/>
       </div>
       ))}

    </div>

  )
}

export default ProductItem
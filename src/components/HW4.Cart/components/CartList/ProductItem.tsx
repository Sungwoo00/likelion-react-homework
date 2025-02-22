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

  const initialCounts = new Array(items.length).fill(1);
  const [counts, setCounts] = useState(initialCounts);

  const calcTotal = (counts: number[]) => {
    return counts.reduce((total, count, index) => {
      return total + count * items[index].price;
    }, 0);
  };

  const handleCountChange = (index: number, newCount: number) => {
    const newCounts = [...counts];
    newCounts[index] = newCount;
    setCounts(newCounts);
    onTotalPriceChange(calcTotal(newCounts));
  };

  return(
    <div className='product-list'>   
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
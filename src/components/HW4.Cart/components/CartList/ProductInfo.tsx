import "@/styles/Cart/ProcudtInfo.css"

interface ProductInfo{
  title: string;
  price: number;
}

function ProductInfo({title, price}:ProductInfo) {

  return(
    <div className='product-info'>
      <h4 className='product-info__title'>{title}</h4>
      <p className='procudt-info__price'> 
        <strong>
          <span>{price.toString()}</span>
          <span>원</span>
        </strong>
      </p>
    </div>
  )

}
export default ProductInfo
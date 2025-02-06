import "@/styles/Cart/ProductImage.css"

interface ProductImage{
  src: string;
  alt: string;
}

function ProductImage({src, alt}:ProductImage) {


  return(
    <div>
      <img className='product-image' src={src} alt={alt} width={64} height={64}/>
    </div>
  )
}
export default ProductImage
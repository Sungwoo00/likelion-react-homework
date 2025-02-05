import "@/styles/Cart/ProductImage.css"

interface ProductImage{
  src: string;
  alt: string;
}

function ProductImage({src, alt}:ProductImage) {

  console.log(src)

  return(
    <div>
      <img src={src} alt={alt} width={64} height={64}/>
    </div>
  )
}
export default ProductImage
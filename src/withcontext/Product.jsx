import { useContext } from "react"
import { ProductContext } from "./ProductContext"


const Product = ({product}) => {

  const { increasePrice, decreasePrice } = useContext(ProductContext)
  return (
    <div>
      <h1>Product</h1>
      <h1>{product.product}</h1>
      <h3>{product.price}</h3>
      <button onClick={() => increasePrice(product.id)}>Increase</button>
      <button onClick={() => decreasePrice(product.id)}>Decrease</button>

    </div>
  )
}

export default Product
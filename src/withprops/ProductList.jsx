import React from 'react'
import Product from './Product'

const ProductList = ({products,increasePrice, decreasePrice}) => {
    // console.log(products)
  return (
    <div>
        {
            products.map((product) => (
                <Product
                    product={product}
                    key={product.id}
                    increasePrice={increasePrice}
                    decreasePrice={decreasePrice}
                />
            ))
        }
        
    </div>
  )
}

export default ProductList
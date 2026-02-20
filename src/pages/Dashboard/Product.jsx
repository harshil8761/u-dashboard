import React, { useContext } from 'react'
import ProductCard from '../../component/common/ProductCard'
import { CartContext } from '../../context/CartContext'

const Product = () => {
  const {Products} = useContext(CartContext)
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-6' >Product</h2>
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          Products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default Product

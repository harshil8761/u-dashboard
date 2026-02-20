import React, { useContext } from 'react'
import {CartContext} from '../../context/CartContext'

const ProductCard = ({product}) => {
  const {addToCart} = useContext(CartContext)
  return (
    <div className='bg-white rounded-xl shadow-sm p-4 flex flex-col' >
      <img src={product.image} alt="image" className='h-50 object-contain mb-4'  />
      <h3 className='font-medium text-gray-800 mb-2 line-clamp-2'>{product.title}</h3>
      <p className='text-blue-600 font-semibold mb-4'>₹  {product.price}</p>
      <button className='mt-auto bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer'onClick={() => addToCart(product)} >AddToCart</button>
    </div>
  )
}

export default ProductCard

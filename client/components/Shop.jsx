import React from 'react'

import ProductList from './ProductList'
import Cart from './Cart'

const Shop = () => (
  <div className='Shop'>
    <h1>Shopping Cart</h1>
    <ProductList />
    <Cart />
  </div>
)

export default Shop
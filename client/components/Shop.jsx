import React from 'react'

import ProductList from './ProductList'
import Cart from './Cart'

const Shop = () => (
  <div className="container">
    <h1 className="shopping-cart">Shopping Cart</h1>
    <ProductList />
    <Cart />
  </div>
)

export default Shop
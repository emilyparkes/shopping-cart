import React from 'react'

const ProductItem = (props) => {
  return (
    <tr className='products-item'>
      <td className='product-name'>{props.name}</td>
      <td className='product-price'>${props.price.toFixed(2)}</td>
      <td><button className='product-add'
        onClick={() => props.addToCart(props.name, props.price)}>add to cart</button></td>
    </tr>
  )
}

export default ProductItem
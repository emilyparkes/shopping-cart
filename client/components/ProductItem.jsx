import React from 'react'

const ProductItem = (props) => {
  return (
    <tr className="row">
      <td className="col-sm">{props.name}</td>
      <td className="col-sm">${props.price.toFixed(2)}</td>
      <td><button type="button" className="btn btn-dark"
        onClick={() => props.addToCart(props.name, props.price)}>add to cart</button></td>
    </tr>
  )
}

export default ProductItem
import React from 'react'

const CartItem = (props) => {
  return (
    <tr className="row">
      <td className="col-sm">{props.item.name}</td>
      <td className="col-sm">${props.item.price.toFixed(2)}</td>
      <td className="col-sm">{props.item.quantity}</td>
      <td className="col-sm">${props.item.subtotal.toFixed(2)}</td>
      <td>
        <button type="button" className="btn btn-dark"
          onClick={() => props.deleteFromCart(props.item)}>delete</button>
      </td>

    </tr>
  )
}

export default CartItem
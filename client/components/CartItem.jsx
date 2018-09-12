import React from 'react'

const CartItem = (props) => {
  return (
    <tr>
      <td>{props.item.name}</td>
      <td>${props.item.price}</td>
      <td>{props.item.quantity}</td>
      <td>${props.item.subtotal.toFixed(2)}</td>
      <td>
        <button onClick={() => props.deleteFromCart(props.item)}>delete</button>
      </td>

    </tr>
  )
}

export default CartItem
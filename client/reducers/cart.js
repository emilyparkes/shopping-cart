import {
  ADD_TO_CART,
  DELETE_FROM_CART
} from '../actions'

function cart(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      return countCartItems(state, action.name, action.price)

    case DELETE_FROM_CART:
      return deleteCartItem(state, action.item)

    default:
      return state
  }
}

function countCartItems(cart, name, price) {
  let exists = false
  const addItem = cart.map(item => {
    if (item.name === name) {
      item.quantity += 1
      item.subtotal += item.price
      exists = true
    }
    return item
  })

  if (exists) {
    return addItem
  } else {
    addItem.push({
      name: name,
      price: price,
      subtotal: price,
      quantity: 1
    })
  }
  return addItem
}

function deleteCartItem(cart, item) {
  const i = cart.indexOf(item)
  if (item.quantity > 1) {
    cart[i].quantity -= 1
    cart[i].subtotal -= item.price
    return cart
  }
  else if (item.quantity <= 1) {
    const removeItem = cart.filter(product => product !== item)
    return removeItem
  }
}



export default cart
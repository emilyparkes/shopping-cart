export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'


export const addToCart = (name, price) => {
  return {
    type: ADD_TO_CART,
    name,
    price
  }
}

export const deleteFromCart = (item) => {
  return {
    type: DELETE_FROM_CART,
    item
  }
}

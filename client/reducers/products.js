import productInfo from '../../server/data/products'

const initialState = productInfo

function products (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default products

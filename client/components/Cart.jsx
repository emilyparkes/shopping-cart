import React from 'react'
import { connect } from 'react-redux'

import CartItem from './CartItem'

import { deleteFromCart, updateCart } from '../actions/index'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: props.cart
    }
    this.getTotal = this.getTotal.bind(this)
  }

  getTotal() {
    let totalPrice = 0
    this.props.cart.map(item => {
      console.log(item)
      totalPrice += item.subtotal
    })
    return totalPrice
  }

  delete(item) {
    const cart = this.state.cart.filter(item => item.name !== name)
    this.setState({ cart })
    this.props.deleteFromCart(item)
  }

  render() {
    const total = this.getTotal()
    return (
      <div className='cart'>
        <h2>Your Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {this.props.cart.map((item, i) => {
              return <CartItem
                key={i}
                item={item}
                deleteFromCart={this.delete.bind(this)}
              />
            })}
          </tbody>
        </table>
        <br />

        <h4>Total Price: ${total.toFixed(2)}</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromCart: (name) => dispatch(deleteFromCart(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
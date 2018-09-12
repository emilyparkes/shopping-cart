import React from 'react'
import { connect } from 'react-redux'
import productsInfo from '../../server/data/products'
import ProductItem from './ProductItem'
import { addToCart } from '../actions/index'

const ProductList = (props) => {
  return (
    <div className="container">
      <h5 className="welcome">Welcome! Please choose your desired items.</h5>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr className="row">
            <th scope="col" className="col-sm">Tools</th>
            <th scope="col" className="col-sm">Price</th>
            <th scope="col" className="col-sm">Buy</th>
          </tr>
        </thead>

        <tbody>
          {productsInfo.map((product, i) => {
            return (
              <ProductItem
                key={i}
                name={product.name}
                price={product.price}
                addToCart={props.addToCart} />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const mapStatetoProps = (state) => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (name, price) => {
      dispatch(addToCart(name, price))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductList)
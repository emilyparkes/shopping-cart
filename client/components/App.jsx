import React from 'react'
import { Route } from 'react-router-dom'

import Shop from './Shop'
// import Cart from './Cart'

const App = () => (
  <div className='app'>
    <Route exact path='/' component={Shop} />
    {/* <Route path='/cart' component={Cart} /> */}
  </div>
)

export default App
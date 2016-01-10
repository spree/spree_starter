import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AppLayout from 'layouts'
import Home from 'components/Home'
import LoginForm from 'components/LoginForm'
import Products from 'containers/Products'
import Product from 'containers/Product'

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Home} />
    <Route path="login" component={LoginForm} />
    <Route path="products">
      <IndexRoute component={Products} />
      <Route path="/products/:productId" component={Product} />
    </Route>
  </Route>
)

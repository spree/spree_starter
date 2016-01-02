import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AppLayout from 'layouts'
import Dummy from 'components/Dummy'
import LoginForm from 'components/LoginForm'
import Products from 'containers/Products'

export default (
  <Route path="/" component={AppLayout}>
    <IndexRoute component={Products} />
    <Route path="login" component={LoginForm} />
    <Route path="products" component={Products} />
  </Route>
)

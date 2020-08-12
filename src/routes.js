import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home'
import Register from './pages/user/register'

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/cadastro" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default routes
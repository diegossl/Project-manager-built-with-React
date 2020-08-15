import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/login'

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default routes
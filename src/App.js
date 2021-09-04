import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ErrPage from './pages/Error'
import TodoPage from './pages/Todo'

const ROUTES = {
  TODO: '/',
  SIGNUP: '/signup',
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.TODO}>
          <TodoPage />
        </Route>
        {/* 그 외에 정의되지 않는 페이지는 error page */}
        <Route>
          <ErrPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

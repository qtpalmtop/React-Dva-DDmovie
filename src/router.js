import React from 'react'
import PropTypes from 'prop-types'
import {
  Switch,
  Route,
  Redirect,
  routerRedux
} from 'dva/router'
import dynamic from 'dva/dynamic'
import App from 'routes/app'

const {
  ConnectedRouter
} = routerRedux

const Routers = function({
  history,
  app
}) {
  const error = dynamic({
    app,
    component: () =>
      import ('./routes/error'),
  })
  const routes = [{
    path: '/',
    models: () => [
      import ('./models/dashboard')
    ],
    component: () =>
      import ('./routes/dashboard/'),
  }, {
    path: '/dashboard',
    models: () => [
      import ('./models/dashboard')
    ],
    component: () =>
      import ('./routes/dashboard/'),
  }, {
    path: '/ticket',
    models: () => [
      import ('./models/user')
    ],
    component: () =>
      import ('./routes/user/'),
  }, {
    path: '/user/:id',
    models: () => [
      import ('./models/user/detail')
    ],
    component: () =>
      import ('./routes/user/detail/'),
  }, {
    path: '/movie/:id',
    models: () => [
      import ('./models/movie/detail')
    ],
    component: () =>
      import ('./routes/movie/detail/'),
  }, {
    path: '/login',
    models: () => [
      import ('./models/login')
    ],
    component: () =>
      import ('./routes/login/'),
  }, {
    path: '/request',
    component: () =>
      import ('./routes/request/'),
  }, {
    path: '/UIElement/iconfont',
    component: () =>
      import ('./routes/UIElement/iconfont/'),
  }, {
    path: '/UIElement/search',
    component: () =>
      import ('./routes/UIElement/search/'),
  }, {
    path: '/UIElement/dropOption',
    component: () =>
      import ('./routes/UIElement/dropOption/'),
  }, {
    path: '/UIElement/layer',
    component: () =>
      import ('./routes/UIElement/layer/'),
  }, {
    path: '/UIElement/dataTable',
    component: () =>
      import ('./routes/UIElement/dataTable/'),
  }, {
    path: '/UIElement/editor',
    component: () =>
      import ('./routes/UIElement/editor/'),
  }, {
    path: '/chart/ECharts',
    component: () =>
      import ('./routes/chart/ECharts/'),
  }, {
    path: '/chart/highCharts',
    component: () =>
      import ('./routes/chart/highCharts/'),
  }, {
    path: '/chart/Recharts',
    component: () =>
      import ('./routes/chart/Recharts/'),
  }, {
    path: '/order',
    models: () => [
      import ('./models/post')
    ],
    component: () =>
      import ('./routes/post/'),
  }, ]

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
          <Route component={error} />
        </Switch>
      </App>
    </ConnectedRouter>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
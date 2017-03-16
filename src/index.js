import 'bootstrap/dist/css/bootstrap.css'
import './components/styles/fonts/open-sans.css'
import './components/styles/App.css'
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reduxPromise from 'redux-promise-middleware'
import es6Promise from 'es6-promise'
import logger from 'redux-logger'
import App from './components/App'
import LoginPage from './components/pages/LoginPage'
import reducers from './reducers'
import axios from 'axios'
import { logout } from './actions/auth'
import { loadingBarMiddleware } from 'react-redux-loading-bar'

es6Promise.polyfill()

const store = createStore(
  reducers,
  applyMiddleware(
    reduxPromise(),
    thunk,
    loadingBarMiddleware(),
    logger()
  )
)

// default axious configuration
//axios.defaults.headers.common['application-id'] = process.env.REACT_APP_ID
//axios.defaults.headers.common['secret-key'] = process.env.REACT_APP_SECRET_KEY
//axios.defaults.baseURL = process.env.REACT_APP_API

// Add a request interceptor
axios.interceptors.request.use(config => {
  const auth = store.getState().auth
  if (auth) {
    config.headers['user-token'] = auth['user-token']
  }

  return config
});
// Add a response interceptor
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && (error.response.status === 401
      || (error.response.data && error.response.data.code === 3064))) {
      store.dispatch(logout())
    }
    return Promise.reject(error)
  }
);

const requireAuth = (nextState, replace) => {
  if (!store.getState().auth) {
    replace({
      pathname: '/login'
    })
  }
}

const requireAnonymous = (nextState, replace) => {
  if (store.getState().auth) {
    replace({
      pathname: '/'
    })
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginPage} onEnter={requireAuth}/>
        <Route path="/login" component={LoginPage} onEnter={requireAnonymous}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

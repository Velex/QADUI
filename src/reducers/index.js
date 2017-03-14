import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading-bar'
import { reducer as formReducer } from 'redux-form'
import auth from './auth'

const todoApp = combineReducers({
  auth,
  loadingBar: loadingBarReducer,
  form: formReducer
})

export default todoApp

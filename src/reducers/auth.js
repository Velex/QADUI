import { browserHistory } from 'react-router'

const app_user = localStorage.getItem('app_user')
const initialState = app_user ? JSON.parse(app_user) : null

const auth = (state = initialState, action) => {
  switch (action.type) {

    case 'LOGIN_PENDING':
      return state
    case 'LOGIN_FULFILLED':
      const json = JSON.stringify(action.payload.data)
      localStorage.setItem('app_user', json)
      // postpone navigation until current action is handled
      setTimeout(() => browserHistory.push('/'), 0)
      return action.payload.data
    case 'LOGIN_REJECTED':
      return state

    case 'LOGOUT':
      localStorage.removeItem('app_user')
      // postpone navigation until current action is handled
      setTimeout(() => browserHistory.push('/login'), 0)
      return null

    default:
      return state
  }
}

export default auth
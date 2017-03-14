import axios from 'axios'

export const login = (credentials) => ({
  type: 'LOGIN',
  payload: axios.post('/users/login', credentials)
})

export const logout = () => ({
  type: 'LOGOUT'
})
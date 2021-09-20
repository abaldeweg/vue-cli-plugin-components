import request from '~b/api'
import Cookies from 'js-cookie'

export const login = function (data) {
  return request().post('/api/login_check', data)
}

export const refresh = function () {
  return request().post('/api/token/refresh', {
    refresh_token: Cookies.get('refresh_token'),
  })
}

export const me = function () {
  return request().get('/api/me')
}

export const changePassword = function (password) {
  return request().put('/api/password', {
    password,
  })
}

export default { login, refresh, me, changePassword }

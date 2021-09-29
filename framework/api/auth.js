import request from '~b/api'

export const login = function (data) {
  return request().post('/api/login_check', data)
}

export const refresh = function (data) {
  return request().post('/api/token/refresh', data)
}

export const me = function () {
  return request().get('/api/me')
}

export const changePassword = function (data) {
  return request().put('/api/password', data)
}

export default { login, refresh, me, changePassword }

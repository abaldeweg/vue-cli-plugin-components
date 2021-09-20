import { onMounted, reactive } from '@vue/composition-api'
import api from '~b/api/auth'
import Cookies from 'js-cookie'

export default function useAuth(emit) {
  const state = reactive({
    username: null,
    password: null,
    me: null,
    isAuthenticated: false,
    isLoggingIn: false,
    isChangingPassword: false,
    interval: null,
    wrongCredentials: false,
    passwordSuccessful: false,
    passwordError: false,
  })

  const session = () => {
    if (undefined !== Cookies.get('token')) {
      state.isAuthenticated = true
      getUser()
    }
    if (
      undefined === Cookies.get('token') &&
      undefined !== Cookies.get('refresh_token')
    ) {
      refresh()
    }
    if (
      undefined === Cookies.get('token') &&
      undefined === Cookies.get('refresh_token')
    ) {
      logout()
    }
  }

  const check = () => {
    session()
    state.interval = window.setInterval(() => {
      session()
    }, 30000)
  }

  const login = () => {
    state.isLoggingIn = true
    api.login({
      username: state.username,
      password: state.password,
    })
      .then(response => {
        Cookies.set('token', response.data.token, { expires: 7 })
        Cookies.set('refresh_token', response.data.refresh_token, {
          expires: 30,
        })
        state.isAuthenticated = true
        emit('loggedin')
        check()
        state.username = null
        state.password = null
      })
      .catch(() => {
        state.wrongCredentials = true
      })
      .finally(() => {
        state.isLoggingIn = false
      })
  }

  const logout = () => {
    window.clearInterval(state.interval)
    Cookies.remove('token')
    Cookies.remove('refresh_token')
    state.isAuthenticated = false
    state.me = null
    emit('loggedout')
  }

  const refresh = () => {
    api.refresh()
      .then(response => {
        Cookies.set('token', response.data.token, { expires: 7 })
        Cookies.set('refresh_token', response.data.refresh_token, {
          expires: 30,
        })
        state.isAuthenticated = true
      })
      .catch(() => {
        logout()
      })
  }

  const changePassword = () => {
    state.isChangingPassword = true
    api.changePassword(state.password)
      .then(() => {
        state.passwordSuccessful = true
        state.password = null
      })
      .catch(() => {
        state.passwordError = true
      })
      .finally(() => {
        state.isChangingPassword = false
      })
  }

  const getUser = () => {
    api.me()
      .then(response => {
        state.me = response.data
      })
      .catch(e => {
        if (e.response.status === 401) {
          logout()
        }
      })
  }

  onMounted(getUser)

  return {
    state,
    login,
    changePassword,
    refresh,
    getUser,
    logout,
    check,
    session,
  }
}

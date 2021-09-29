import axios from 'axios'
import Cookies from 'js-cookie'
import config from '@/../vue.config'

const headers = () => {
  let items = {
    'Content-Type': 'application/json',
  }

  if (config.pluginOptions.components.needsAuth && Cookies.get('token')) {
    items['Authorization'] = 'Bearer ' + Cookies.get('token')
  }

  return items
}

export default function () {
  return axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 50000,
    headers: headers(),
  })
}

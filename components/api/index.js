import axios from 'axios'
import Cookies from 'js-cookie'

export default function () {
  return axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 50000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Cookies.get('token'),
    },
  })
}

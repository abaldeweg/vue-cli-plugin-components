/* eslint-disable no-console */
import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log('Served by cache')
    },
    registered() {
      console.log('SW registered')
    },
    cached() {
      console.log('Content cached')
    },
    updatefound() {
      console.log('Download new content')
    },
    updated() {
      console.log('New content available')
    },
    offline() {
      console.log('Offline')
    },
    error(error) {
      console.error(error)
    },
  })
}

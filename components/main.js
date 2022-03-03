import Vue from 'vue'
import './installCompositionApi'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import meta from './meta'
import components from './components'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  meta,
  components,
  render: (h) => h(App),
}).$mount('#app')

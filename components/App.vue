<template>
  <layout :auth="auth">
    <router-view :auth="auth" v-if="!needsAuth || auth.state.isAuthenticated" />

    <b-container size="s" v-if="needsAuth && !auth.state.isAuthenticated">
      <h1>{{ $t('login') }}</h1>
      <auth-login />
    </b-container>
  </layout>
</template>

<script>
import Layout from '@/Layout'
import AuthLogin from '~b/components/auth/Login'
import useAuth from '~b/composables/useAuth'
import config from '@/../vue.config'

export default {
  name: 'app',
  components: {
    Layout,
    AuthLogin,
  },
  head: {
    title: 'Home',
    titleTemplate: (title) => {
      return title
        ? title + ' - ' + config.pluginOptions.baldeweg.title
        : config.pluginOptions.baldeweg.title
    },
  },
  setup() {
    const needsAuth = config.pluginOptions.baldeweg.needsAuth || true
    const auth = needsAuth ? useAuth() : null

    return { needsAuth, auth }
  },
}
</script>

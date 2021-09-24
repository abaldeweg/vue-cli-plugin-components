<template>
  <b-app>
    <b-masthead>
      <b-masthead-item type="center">
        <router-link :to="{ name: 'index' }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 200 200"
            class="logo"
          >
            <path
              d=""
            />
          </svg>
        </router-link>
      </b-masthead-item>
    </b-masthead>

    <b-container size="m" v-if="auth.state.isAuthenticated">
      <b-tabs>
        <b-tabs-link>
          <router-link :to="{ name: 'index' }">
            {{ $t('home') }}
          </router-link>
        </b-tabs-link>
        <b-tabs-link>
          <router-link :to="{ name: 'profile' }" v-if="auth.state.me">
            {{ auth.state.me.username }}
          </router-link>
        </b-tabs-link>
        <b-tabs-link>
          <a href="/logout" @click.prevent="auth.logout">
            {{ $t('logout') }}
          </a>
        </b-tabs-link>
      </b-tabs>
    </b-container>

    <slot />
  </b-app>
</template>

<script>
export default {
  name: 'layout',
  components: {},
  props: {
    auth: {
      type: Object,
    },
  },
}
</script>

<style scoped>
.logo {
  fill: var(--color-primary-10);
}
</style>

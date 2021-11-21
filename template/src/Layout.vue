<template>
  <b-app>
    <b-masthead>
      <b-masthead-item type="start" v-if="auth.state.isAuthenticated">
        <span @click="state.isDrawerActive = true">
          <b-icon type="hamburger" />
        </span>
      </b-masthead-item>

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

      <b-masthead-item type="end" v-if="auth.state.isAuthenticated">
        <b-dropdown position="bottom">
          <template #selector>
            <span @click.prevent>
              <b-icon type="profile" />
            </span>
          </template>
          <b-dropdown-item no-hover v-if="auth.state.me">
            {{ $t('hello') }}, {{ auth.state.me.username }}!
          </b-dropdown-item>

          <b-dropdown-divider />

          <b-dropdown-item @click.prevent="$router.push({ name: 'profile' })">
            {{ $t('settings') }}
          </b-dropdown-item>
          <b-dropdown-item @click.prevent="auth.logout()">
            {{ $t('logout') }}
          </b-dropdown-item>
        </b-dropdown>
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

    <b-drawer
      :active="state.isDrawerActive"
      collapsable
      @open-menu="state.isDrawerActive = true"
      @close-menu="state.isDrawerActive = false"
    >
      <div :style="{ padding: '20px' }">
        <b-list :route="{ name: 'index' }" divider>
          <template #title>
            {{ $t('home') }}
          </template>
        </b-list>
        <b-list :route="{ name: 'profile' }" divider v-if="auth.state.me">
          <template #title>
            {{ auth.state.me.username }}
          </template>
        </b-list>
      </div>
    </b-drawer>
  </b-app>
</template>

<script>
import { onMounted, reactive } from '@vue/composition-api'
import router from '~b/router'

export default {
  name: 'layout',
  props: {
    auth: {
      type: Object,
    },
  },
  setup() {
    const state = reactive({
      isDrawerActive: false,
    })

    onMounted(() => {
      router.beforeEach((to, from, next) => {
        state.isDrawerActive = false
        next()
      })
    })

    return { state }
  },
}
</script>

<style scoped>
.logo {
  fill: var(--color-primary-10);
}
</style>

<template>
  <layout :auth="auth">
    <router-view v-if="auth.state.isAuthenticated" />

    <b-container size="s" v-if="!auth.state.isAuthenticated">
      <h1>{{ $t("login") }}</h1>
      <auth-login @loggedin="auth.session" />
    </b-container>
  </layout>
</template>

<script>
import Layout from "@/Layout";
import AuthLogin from "~b/components/auth/Login";
import useAuth from "~b/composables/useAuth";
import config from "@/../vue.config";

export default {
  name: "app",
  components: {
    Layout,
    AuthLogin,
  },
  head: {
    title: "Home",
    titleTemplate: (title) => {
      return title
        ? title + " - " + config.pluginOptions.baldeweg.title
        : config.pluginOptions.baldeweg.title;
    },
  },
  setup(props, { emit }) {
    const auth = useAuth(emit);
    auth.check();

    return { auth };
  },
};
</script>

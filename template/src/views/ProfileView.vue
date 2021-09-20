<template>
  <article>
    <b-container size="m">
      <h1>{{ $t('profile') }}</h1>
    </b-container>

    <b-container size="m">
      <auth-password />
    </b-container>

    <b-container size="m">
      <profile-locale />
    </b-container>

    <b-container size="m">
      <profile-theme />
    </b-container>
  </article>
</template>

<script>
import AuthPassword from '~b/components/auth/Password'
import ProfileLocale from '~b/components/profile/Locale'
import ProfileTheme from '~b/components/profile/Theme'

export default {
  name: 'profile-view',
  components: {
    AuthPassword,
    ProfileLocale,
    ProfileTheme,
  },
  head: {
    title: 'Profile',
  },
}
</script>

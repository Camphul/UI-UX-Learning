<template>
  <div>
    <h1>
      UX/UI learning
    </h1>
    <p>{{ user }}</p>
    <v-btn
      color="primary"
      @click="doLogout"
    >
      Logout
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
@Component
export default class IndexPage extends Vue {
  get user () {
    return this.$auth.user
  }
  doLogout () {
    this.$auth.logout()
  }
}
</script>

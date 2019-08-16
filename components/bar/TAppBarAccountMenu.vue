<template>
  <v-menu left bottom>
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item>
        <v-list-item-title>
          <v-icon>
            mdi-account
          </v-icon>
          View Profile
        </v-list-item-title>
      </v-list-item>
      <v-list-item @click="doLogout">
        <v-list-item-title>
          <v-icon>
            mdi-logout
          </v-icon>
          Log out
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class TAppBarAccountMenu extends Vue {
  doLogout() {
    this.$auth.logout()
  }
}
</script>

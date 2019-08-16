<template>
  <v-app-bar color="primary" clipped-left app>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <slot name="title">
      <v-toolbar-title>
        UI-UX Learn
      </v-toolbar-title>
    </slot>
    <slot></slot>
    <v-spacer />
    <slot name="right">
      <t-app-bar-account-menu v-show="loggedIn" />
    </slot>
  </v-app-bar>
</template>
<script lang="ts">
import { Vue, Component, Emit } from 'nuxt-property-decorator'
import TAppBarAccountMenu from './TAppBarAccountMenu.vue'
@Component({
  components: {
    TAppBarAccountMenu
  }
})
export default class TAppBar extends Vue {
  loggedIn: boolean = this.$auth.loggedIn

  @Emit('toggleDrawer')
  toggleDrawer() {}
}
</script>

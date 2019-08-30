<template>
  <v-app-bar color="primary" clipped-left app>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <slot name="title">
      <t-app-bar-title />
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
import TAppBarTitle from './TAppBarTitle.vue'
@Component({
  components: {
    TAppBarAccountMenu,
    TAppBarTitle
  }
})
export default class TAppBar extends Vue {
  private loggedIn: boolean = this.$auth.loggedIn

  @Emit('toggleDrawer')
  toggleDrawer() {}
}
</script>
<style scoped lang="scss">
.toolbar-title {
  color: black;
  text-decoration: none;
}
</style>

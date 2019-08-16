<template>
  <v-app>
    <t-navigation-drawer ref="drawer" />
    <t-app-bar @toggleDrawer="toggleDrawer" />
    <v-content app>
      <v-container grid-list-md text-center>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import { Vue, Component } from 'nuxt-property-decorator'
import TNavigationDrawer from '~/components/bar/TNavigationDrawer'
import TAppBar from '~/components/bar/TAppBar.vue'
@Component({
  components: {
    TNavigationDrawer,
    TAppBar
  }
})
export default class DefaultLayout extends Vue {
  toggleDrawer() {
    this.$refs.drawer.toggle()
  }
}
</script>

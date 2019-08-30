<template>
  <v-app>
    <t-navigation-drawer ref="drawer" />
    <t-app-bar @toggleDrawer="toggleDrawer" />
    <v-content app>
      <v-container grid-list-md>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import TNavigationDrawer from '~/components/bar/TNavigationDrawer.vue'
import TAppBar from '~/components/bar/TAppBar.vue'
import { Toggleable } from '~/lib/types'
@Component({
  components: {
    TNavigationDrawer,
    TAppBar
  }
})
export default class DefaultLayout extends Vue {
  toggleDrawer() {
    this.drawer().toggle()
  }

  private drawer(): Toggleable {
    return (this.$refs.drawer as unknown) as Toggleable
  }
}
</script>

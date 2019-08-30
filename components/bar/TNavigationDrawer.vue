<template>
  <v-navigation-drawer v-model="open" app clipped left>
    <v-list dense>
      <slot name="items">
        <t-navigation-drawer-item
          to="/create"
          icon="mdi-pencil-plus"
          title="Create BlogPost"
        />
      </slot>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TNavigationDrawerItem from './TNavigationDrawerItem.vue'
import { Toggleable } from '~/lib/types'

@Component({
  components: {
    TNavigationDrawerItem
  }
})
export default class TNavigationDrawer extends Vue implements Toggleable {
  private open: boolean = false

  public toggle(): void {
    this.open = !this.open
  }
}
</script>

<template>
  <v-navigation-drawer v-model="open" app clipped left>
    <v-list dense>
      <slot name="items">
        <v-list-item to="/create">
          <v-list-item-action>
            <v-icon>mdi-pencil-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Create BlogPost</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </slot>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class TNavigationDrawer extends Vue {
  open: boolean = false

  toggle() {
    this.open = !this.open
  }
}
</script>

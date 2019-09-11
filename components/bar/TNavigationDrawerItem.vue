<template>
  <v-list-item :to="to">
    <v-list-item-action v-show="icon">
      <v-icon>
        {{ icon }}
      </v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>
        {{ title }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class TNavigationDrawerItem extends Vue {
  @Prop({
    required: true
  })
  readonly to!: string

  @Prop({
    required: true
  })
  readonly title!: string

  @Prop({
    required: false,
    default: ''
  })
  readonly icon!: string
}
</script>

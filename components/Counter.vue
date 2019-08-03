<template>
  <div>
    Start index: {{start}}
  </div>
</template>
<script lang="ts">
  import {Vue, Component, Prop} from "nuxt-property-decorator";

  @Component
  export default class Counter extends Vue{
    @Prop({required: false, default: 0})
    start!: number
  }
</script>

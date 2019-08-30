<template>
  <div>
    <h1 class="headline">
      UX/UI learning
    </h1>
    <p v-for="blog in blogs" :key="blog.id">
      <strong>{{ blog.title }}</strong>
    </p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class IndexPage extends Vue {
  async fetch({ store }) {
    await store.dispatch('blogs/showPage')
  }

  get blogs() {
    return this.$store.getters['blogs/content']
  }

  get user() {
    return this.$auth.user
  }
}
</script>

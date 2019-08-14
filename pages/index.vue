<template>
  <div>
    <h1>
      UX/UI learning
    </h1>
    <p>{{ blogs }}</p>
    <v-btn
      color="primary"
      @click="doLogout"
    >
      Logout
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Page from '../lib/api/types/page'
import BlogPostSummary from '~/lib/types/blog/BlogPostSummary'
@Component
export default class IndexPage extends Vue {
  private blogPage: Page<BlogPostSummary>;

  async asyncData ({ app }) {
    const blogPage = await app.$restRepo('blogs').index()
    return {
      blogPage
    }
  }
  get blogs (): BlogPostSummary[] {
    return this.blogPage.content
  }

  get user () {
    return this.$auth.user
  }
  doLogout () {
    this.$auth.logout()
  }
}
</script>

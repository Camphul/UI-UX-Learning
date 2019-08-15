<template>
  <div>
    <h1>
      UX/UI learning
    </h1>
    <p>{{ blogs }}</p>
    <v-btn
      color="primary"
      @click="doPost"
    >
      Create post
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TestRepository from '~/lib/rest/TestRepository'
import { NuxtApp, NuxtContext } from '~/lib/types/nuxt'
import BlogPostSummary from '~/lib/types/blog/BlogPostSummary'
import Page from '~/lib/rest/types/page'
import { UUIDResponse } from '~/lib/rest/types'
@Component
export default class IndexPage extends Vue {
  private blogs: Page<BlogPostSummary>

  async asyncData (context: NuxtContext): any {
    const app: NuxtApp = context.app
    const blogsRepo: TestRepository = app.$repo.get<TestRepository>('blogs')
    const blogs = (await blogsRepo.index()) as Page<BlogPostSummary>
    return {
      blogs
    }
  }

  get user () {
    return this.$auth.user
  }

  doPost () {
    this.$repo.get('blogs').create({
      title: 'Post from within vue',
      content: 'hahaha vet dfdfdfdfstoer'
    }).then((id: UUIDResponse) => {
      alert('Posted id ' + id.id)
    }).catch((error: Error) => {
      alert('Something went wrong: ' + error.message)
    })
  }
}
</script>

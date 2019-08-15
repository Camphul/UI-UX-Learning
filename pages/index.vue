<template>
  <div>
    <h1>
      UX/UI learning
    </h1>
    <p v-for="blog in blogs" :key="blog.id">
      <strong>{{ blog.title }}</strong>
    </p>
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
import { UUIDResponse } from '~/lib/rest/types'

@Component
export default class IndexPage extends Vue {
  async fetch ({ store }) {
    await store.dispatch('blogs/showPage')
  }

  get blogs () {
    return this.$store.getters['blogs/content']
  }

  get user () {
    return this.$auth.user
  }

  doPost () {
    this.$store.dispatch('blogs/create', {
      title: ('From vue: ' + new Date().getTime()),
      content: 'hahaha vet dfdfdfdfstoer'
    }).then((id: UUIDResponse) => {
      this.$store.dispatch('blogs/refresh')
    }).catch((error: Error) => {
      alert('Something went wrong: ' + error.message)
    })
  }
}
</script>

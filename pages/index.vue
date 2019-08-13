<template>
  <div>
    <h1>
      Counter App
    </h1>
    <p>{{ blogs }}</p>
    <h2>
      <Counter />
    </h2>
  </div>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'
import Counter from '@/components/Counter.vue'
//  import Counter from '@/components/'
const IndexPage = Vue.extend({
  components: {
    Counter
  },
  data: () => {
    return {
      blogs: {}
    }
  },
  async asyncData ({ $axios }) {
    let { data } = await $axios.get(`/blogs`)
    return {
      blogs: data
    }
  }
})
export default IndexPage

</script>

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
import { Component, Vue } from 'nuxt-property-decorator'
import Counter from '@/components/Counter.vue'
//  import Counter from '@/components/'
@Component({
  components: {
    Counter
  }
})
export default class IndexPage extends Vue {
  blogs: any = {}
  async asyncData ({ $axios }) {
    console.log($axios)
    const {data} = await $axios.get('/blogs')
    return {
      blogs: data
    }
  }
}
</script>

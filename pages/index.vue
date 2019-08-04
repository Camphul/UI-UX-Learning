<template>
  <div>
    <h1>
      Counter App
    </h1>
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
}
</script>

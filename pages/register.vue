<template>
  <div>
    Register page
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'auth'
})
export default class RegisterPage extends Vue {
  auth: boolean = false
}
</script>

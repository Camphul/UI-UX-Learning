<template>
  <card-form id="login-form" title="Welcome Back" submit-button-text="Login" @submit="doLogin">
    <template #actionButtons>
      <v-spacer />
      <v-button text>
        Forgot Password
      </v-button>
    </template>
  </card-form>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CardForm from '~/components/form/CardForm.vue'
@Component({
  layout: 'auth',
  components: {
    CardForm
  }
})
export default class LoginPage extends Vue {
  doLogin () {
    alert('Submitting form')
  }
}
</script>

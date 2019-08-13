<template>
  <t-card-form
    id="login-form"
    title="Welcome Back"
    submit-button-text="Login"
    :schema="schema"
    :model="formData"
    @submit="doLogin"
  >
    <template #actionButtons>
      <v-spacer />
      <v-btn text>
        Forgot Password
      </v-btn>
    </template>
  </t-card-form>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TCardForm from '~/components/form/TCardForm.vue'
import { LoginModel, buildSchema } from '~/lib/form/auth/login'
import FormInputSchema from '~/lib/form/factory/FormInputSchema'

// If we should use a username or email input field
const USE_EMAIL_IDENTIFIER = true

@Component({
  layout: 'auth',
  components: {
    TCardForm
  }
})
export default class LoginPage extends Vue {
  // Configure to use username or email in here
  private schema: FormInputSchema[] = buildSchema(USE_EMAIL_IDENTIFIER)
  private formData: LoginModel = {
    identifier: '',
    password: ''
  }

  doLogin () {
    alert('Submitting form: ' + JSON.stringify(this.formData))
  }
}
</script>

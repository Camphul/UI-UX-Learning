<template>
  <div>
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
        <v-btn text to="/register">
          Register
        </v-btn>
      </template>
    </t-card-form>
    <v-snackbar
      v-model="showError"
      color="error"
    >
      Incorrect {{ identificationType }}/password combination.
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import TCardForm from '~/components/form/TCardForm.vue'
import { LoginModel, buildSchema } from '~/lib/forms/auth/login'
import FormInputSchema from '~/lib/forms/factory/FormInputSchema'

// If we should use a username or email input field
const USE_EMAIL_IDENTIFIER = true

@Component({
  layout: 'auth',
  transition: 'scroll-y-transition',
  components: {
    TCardForm
  }
})
export default class LoginPage extends Vue {
  // Configure to use username or email in here
  private schema: FormInputSchema[] = buildSchema(USE_EMAIL_IDENTIFIER)
  private showError: boolean = false
  private formData: LoginModel = {
    identifier: 'admin@example.com',
    password: 'test'
  }

  async doLogin () {
    try {
      this.$wait.start('login-form-wait')
      await this.$auth.loginWith('local', {
        data: this.formData
      })
      this.$router.push('/')
    } catch (e) {
      this.showError = true
    } finally {
      this.$wait.end('login-form-wait')
    }
  }

  get identificationType () {
    return USE_EMAIL_IDENTIFIER ? 'email' : 'username'
  }
}
</script>

<template>
  <t-card-form
    id="login-form"
    title="Welcome Back"
    submit-button-text="Login"
    :schema="loginSchema"
    :values="loginValues"
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
import { IsRequired, MaxLength, MinLength, NotBlank } from '~/lib/form/rules'
@Component({
  layout: 'auth',
  components: {
    TCardForm
  }
})
export default class LoginPage extends Vue {
  loginValues = {
    identifier: '',
    password: ''
  }

  loginSchema: object = [
    {
      name: 'identifier',
      label: 'Username',
      rules: [
        IsRequired(),
        MinLength(2),
        MaxLength(16),
        NotBlank()
      ],
      icon: 'mdi-account'
    },
    {
      type: 'password',
      name: 'password',
      icon: 'mdi-lock',
      rules: [
        IsRequired(),
        MinLength(2),
        MaxLength(16),
        NotBlank()
      ]
    }
  ]
  doLogin () {
    alert('Submitting form: ' + JSON.stringify(this.loginValues))
  }
}
</script>

<template>
  <div>
    <t-card-form
      id="register-form"
      :schema="registerSchema"
      :model="formData"
      @submit="doRegister"
      title="Create Account"
      submit-button-text="Register"
    >
      <template slot="actionButtons">
        <v-spacer />
        <v-btn text to="/login">
          Login
        </v-btn>
      </template>
    </t-card-form>
    <v-snackbar v-model="showError" color="error">
      {{ errorMessage }}
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import StringRule from '~/lib/forms/rules/StringRule'
import {
  IsEmail,
  IsRequired,
  MaxLength,
  MinLength,
  NotBlank
} from '~/lib/forms/rules'
import FormSchema from '~/lib/forms/factory/schema/FormSchema'
import RegisterFormModel from '~/lib/forms/auth/register/RegisterFormModel'
import FormInputSchema from '~/lib/forms/factory/schema/FormInputSchema'
import TCardForm from '~/components/form/TCardForm.vue'

@Component({
  layout: 'auth',
  auth: false,
  transition: 'scroll-y-reverse-transition',
  components: {
    TCardForm
  }
})
export default class RegisterPage extends Vue {
  private showError: boolean = false
  private errorMessage: string = 'Unknown error'

  private formData: RegisterFormModel = {
    username: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: ''
  }

  doRegister() {
    this.$wait.start('register-form-wait')
    alert('Not implemented!')
    setTimeout(() => {
      this.$wait.end('register-form-wait')
    }, 3000)
  }

  get registerSchema(): FormSchema {
    return [
      {
        name: 'username',
        type: 'text',
        icon: 'mdi-account',
        rules: [IsRequired(), MinLength(2), MaxLength(16), NotBlank()],
        attributes: {
          autofocus: true
        }
      } as FormInputSchema,
      {
        name: 'email',
        type: 'email',
        icon: 'mdi-email',
        rules: [IsRequired(), IsEmail()]
      } as FormInputSchema,
      {
        name: 'emailConfirm',
        label: 'Confirm Email',
        type: 'email',
        icon: 'mdi-email',
        rules: [
          IsEmail(),
          (value => {
            return value === this.formData.email || 'Does not match email.'
          }) as StringRule
        ]
      } as FormInputSchema,
      {
        name: 'password',
        type: 'password',
        icon: 'mdi-lock',
        rules: [IsRequired(), MinLength(2), MaxLength(32)]
      } as FormInputSchema,
      {
        name: 'passwordConfirm',
        label: 'Confirm Password',
        type: 'password',
        icon: 'mdi-lock',
        rules: [
          IsRequired(),
          ((value: string) => {
            return (
              value === this.formData.password ||
              'Does not match other password'
            )
          }) as StringRule
        ]
      } as FormInputSchema
    ]
  }
}
</script>

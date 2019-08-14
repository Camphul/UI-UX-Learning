<template>
  <div>
    <t-card-form
      id="register-form"
      title="Create Account"
      submit-button-text="Register"
      :schema="registerSchema"
      :model="formData"
      @submit="doRegister"
    >
      <template #actionButtons>
        <v-spacer />
        <v-btn text to="/login">
          Login
        </v-btn>
      </template>
    </t-card-form>
    <v-snackbar
      v-model="showError"
      color="error"
    >
      {{ errorMessage }}
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import RegisterModel from '~/lib/form/auth/register/RegisterModel'
import TCardForm from '~/components/form/TCardForm.vue'
import { IsEmail, IsRequired, MaxLength, MinLength, NotBlank } from '~/lib/form/rules'

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

  private formData: RegisterModel = {
    username: '',
    email: '',
    emailConfirm: '',
    password: '',
    passwordConfirm: ''
  }

  get registerSchema () {
    return [
      {
        name: 'username',
        type: 'text',
        icon: 'mdi-account',
        rules: [
          IsRequired(),
          MinLength(2),
          MaxLength(16),
          NotBlank()
        ],
        attributes: {
          autofocus: true
        }
      },
      {
        name: 'email',
        type: 'email',
        icon: 'mdi-email',
        rules: [
          IsRequired(),
          IsEmail()
        ]
      },
      {
        name: 'emailConfirm',
        label: 'Confirm Email',
        type: 'email',
        icon: 'mdi-email',
        rules: [
          IsEmail(),
          (value) => {
            return value === this.formData.email || 'Does not match email.'
          }
        ]
      },
      {
        name: 'password',
        type: 'password',
        icon: 'mdi-lock',
        rules: [
          IsRequired(),
          MinLength(2),
          MaxLength(32)
        ]
      },
      {
        name: 'passwordConfirm',
        label: 'Confirm Password',
        type: 'password',
        icon: 'mdi-lock',
        rules: [
          IsRequired(),
          (value) => {
            return value === this.formData.password || 'Does not match other password'
          }
        ]
      }
    ]
  }

  doRegister () {
    this.$wait.start('register-form-wait')
    alert('Not implemented!')
    setTimeout(() => {
      this.$wait.end('register-form-wait')
    }, 3000)
  }
}
</script>

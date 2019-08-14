import { IsEmail } from '~/lib/forms/rules'
import FormInputSchema from '~/lib/forms/factory/schema/FormInputSchema'

/**
 * Username or email identification schema.
 */
const EmailFieldSchema: FormInputSchema = {
  name: 'identifier',
  type: 'email',
  label: 'Email',
  rules: [
    IsEmail()
  ],
  icon: 'mdi-account',
  attributes: {
    autofocus: true
  }
}

export default EmailFieldSchema

import { MaxLength, IsEmail } from '~/lib/form/rules'
import FormInputSchema from '~/lib/form/factory/FormInputSchema'

/**
 * Username or email identification schema.
 */
const EmailFieldSchema: FormInputSchema = {
  name: 'identifier',
  type: 'email',
  label: 'Email',
  rules: [
    MaxLength(256),
    IsEmail()
  ],
  icon: 'mdi-account',
  attributes: {
    autofocus: true
  }
}

export default EmailFieldSchema

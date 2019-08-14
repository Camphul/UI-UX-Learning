import EmailFieldSchema from './EmailFieldSchema'
import PasswordFieldSchema from './PasswordFieldSchema'
import FormInputSchema from '~/lib/forms/factory/FormInputSchema'

const EmailLoginSchema: FormInputSchema[] = [
  EmailFieldSchema,
  PasswordFieldSchema
]

export default EmailLoginSchema

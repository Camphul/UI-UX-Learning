import UsernameFieldSchema from './UsernameFieldSchema'
import PasswordFieldSchema from './PasswordFieldSchema'
import FormInputSchema from '~/lib/forms/factory/FormInputSchema'

const UsernameLoginSchema: FormInputSchema[] = [
  UsernameFieldSchema,
  PasswordFieldSchema
]

export default UsernameLoginSchema

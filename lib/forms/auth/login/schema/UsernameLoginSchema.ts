import UsernameFieldSchema from './fields/UsernameFieldSchema'
import PasswordFieldSchema from './fields/PasswordFieldSchema'
import FormSchema from '~/lib/forms/factory/schema/FormSchema'

const usernameLoginSchema: FormSchema = [
  UsernameFieldSchema,
  PasswordFieldSchema
]

export default usernameLoginSchema

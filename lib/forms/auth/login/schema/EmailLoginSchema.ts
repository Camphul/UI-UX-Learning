import EmailFieldSchema from './fields/EmailFieldSchema'
import PasswordFieldSchema from './fields/PasswordFieldSchema'
import FormSchema from '~/lib/forms/factory/schema/FormSchema'

const emailLoginSchema: FormSchema = [EmailFieldSchema, PasswordFieldSchema]

export default emailLoginSchema

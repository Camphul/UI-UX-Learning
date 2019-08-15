import UsernameLoginSchema from './schema/UsernameLoginSchema'
import EmailLoginSchema from './schema/EmailLoginSchema'
import LoginModel from './LoginModel'
import FormSchema from '~/lib/forms/factory/schema/FormSchema'
/**
 * Returns correct form schema.
 * @param email if we should use the email schema for login.
 */
function buildSchema(email: boolean = false): FormSchema {
  return email ? EmailLoginSchema : UsernameLoginSchema
}

export { buildSchema, LoginModel }

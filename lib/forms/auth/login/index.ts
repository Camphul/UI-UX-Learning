import UsernameLoginSchema from './schema/UsernameLoginSchema'
import EmailLoginSchema from './schema/EmailLoginSchema'
import LoginModel from './LoginModel'
import FormInputSchema from '~/lib/forms/factory/FormInputSchema'
/**
 * Returns correct form schema.
 * @param email if we should use the email schema for login.
 */
function buildSchema (email: boolean = false): FormInputSchema[] {
  return email ? EmailLoginSchema : UsernameLoginSchema
}

export {
  buildSchema,
  LoginModel
}

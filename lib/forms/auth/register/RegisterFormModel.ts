/**
 * Model used by registration form.
 */
export default interface RegisterFormModel {
  username: string,
  email: string,
  emailConfirm: string,
  password: string,
  passwordConfirm: string
}

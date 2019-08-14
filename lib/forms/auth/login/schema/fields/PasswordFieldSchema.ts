import { IsRequired, MaxLength, MinLength, NotBlank } from '~/lib/forms/rules'
import FormInputSchema from '~/lib/forms/factory/schema/FormInputSchema'

/**
 * Password field identification schema
 */
const PasswordFieldSchema: FormInputSchema = {
  type: 'password',
  name: 'password',
  rules: [
    IsRequired(),
    MinLength(2),
    MaxLength(256),
    NotBlank()
  ],
  icon: 'mdi-lock'
}

export default PasswordFieldSchema

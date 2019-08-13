import { IsRequired, MaxLength, MinLength, NotBlank } from '~/lib/form/rules'
import FormInputSchema from '~/lib/form/factory/FormInputSchema'

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

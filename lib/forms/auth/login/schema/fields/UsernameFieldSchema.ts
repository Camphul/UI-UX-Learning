import { IsRequired, MaxLength, MinLength, NotBlank } from '~/lib/forms/rules'
import FormInputSchema from '~/lib/forms/factory/schema/FormInputSchema'

/**
 * Username or email identification schema.
 */
const UsernameFieldSchema: FormInputSchema = {
  type: 'text',
  name: 'identifier',
  label: 'Username',
  attributes: {
    autofocus: true
  },
  rules: [IsRequired(), MinLength(2), MaxLength(256), NotBlank()],
  icon: 'mdi-account'
}

export default UsernameFieldSchema

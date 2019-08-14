import { StringAnyMap } from '~/lib/types/Maps'
import Rule from '~/lib/forms/rules/Rule'

/**
 * Schema for a single form input.
 */
export default interface FormInputSchema {
  type: string,
  name: string,
  label?: string,
  attributes?: StringAnyMap,
  rules?: Rule<any>[],
  icon?: string
}

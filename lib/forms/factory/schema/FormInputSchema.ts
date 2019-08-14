import { StringAnyMap } from '../../../types/Maps'

/**
 * Schema for a single form input.
 */
export default interface FormInputSchema {
  type: string,
  name: string,
  label?: string,
  attributes?: StringAnyMap,
  rules?: Function[],
  icon?: string
}

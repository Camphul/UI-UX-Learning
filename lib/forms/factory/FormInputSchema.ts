import { StringAnyMap } from '~/lib/types/Maps'

export default interface FormInputSchema {
  type: string,
  name: string,
  label?: string,
  attributes?: StringAnyMap,
  rules?: Function[],
  icon?: string
}

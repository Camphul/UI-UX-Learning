/**
 * Build rule.
 * @param message error message.
 */
import Rule from './Rule'
import { SuccessError } from '~/lib/types'

export default function build(
  message: string = 'Input is required.'
): Rule<any> {
  return ((value: any): SuccessError => {
    return !!value || message
  }) as Rule<any>
}

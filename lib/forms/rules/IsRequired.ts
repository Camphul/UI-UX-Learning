/**
 * Build rule.
 * @param message error message.
 */
import { SuccessError } from '~/lib/types'

export default function build (message: string = 'Input is required.'): Function {
  return (value: any): SuccessError => {
    return !!value || message
  }
}

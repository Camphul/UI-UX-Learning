/**
 * Build rule.
 * @param size max size
 * @param included when true it accepts equal value.
 * @param message error message.
 */
import { SuccessError } from '~/lib/types'

export default function build (size: number, included: boolean = true, message: string = `Exceeds limit of ${size} characters.`): Function {
  return (value: string): SuccessError => {
    if (included) {
      return value.length <= size || message
    } else {
      return value.length < size || message
    }
  }
}

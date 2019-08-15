import StringRule from './StringRule'
import { SuccessError } from '~/lib/types'

const EMPTY_STRING = ''

/**
 * Build rule to check for string blanks.
 * @param message error message.
 */
export default function build(
  message: string = 'Input cannot be blank.'
): StringRule {
  return ((value: string): SuccessError => {
    return value.trim() !== EMPTY_STRING || message
  }) as StringRule
}

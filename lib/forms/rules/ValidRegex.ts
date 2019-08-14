/**
 * Build rule to check for correct regex.
 * @param regularExpression the regex
 * @param message error message.
 */
import StringRule from './StringRule'
import { SuccessError } from '~/lib/types'

export default function build (regularExpression: string, message: string = 'Input does not match expression.'): StringRule {
  return ((value: string): SuccessError => {
    const expression = new RegExp(regularExpression)
    return expression.test(value) || message
  }) as StringRule
}

import ValidRegex from './ValidRegex'
import StringRule from './StringRule'

/* eslint-disable max-len */
// prettier-ignore
const EMAIL_REGEX =
  '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
/* eslint-enable max-len */

/**
 * Build rule to check for valid email address.
 * @param message error message.
 */
export default function build(
  message: string = 'Please enter a valid e-mail address.'
): StringRule {
  return ValidRegex(EMAIL_REGEX, message)
}

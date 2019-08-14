import ValidRegex from './ValidRegex'

const EMAIL_REGEX = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'

/**
 * Build rule to check for valid email address.
 * @param message error message.
 */
export default function build (message: string = 'Please enter a valid e-mail address.'): Function {
  return ValidRegex(EMAIL_REGEX, message)
}

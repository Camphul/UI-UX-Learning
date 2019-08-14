/**
 * Build rule to check for correct regex.
 * @param regularExpression the regex
 * @param message error message.
 */
export default function build (regularExpression: string, message: string = 'Input does not match expression.'): Function {
  return (value: string): boolean | string => {
    const expression = new RegExp(regularExpression)
    return expression.test(value) || message
  }
}

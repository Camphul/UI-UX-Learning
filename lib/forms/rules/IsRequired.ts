/**
 * Build rule.
 * @param message error message.
 */
export default function build (message: string = 'Input is required.'): Function {
  return (value: any): boolean | string => {
    return !!value || message
  }
}

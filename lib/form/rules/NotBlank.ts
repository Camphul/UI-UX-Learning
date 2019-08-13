const EMPTY_STRING = ''

/**
 * Build rule to check for string blanks.
 * @param message error message.
 */
export default function build (message: string = 'Input cannot be blank.'): Function {
  return (value: string): boolean | string => {
    return value.trim() !== EMPTY_STRING || message
  }
}
/**
 * Build rule.
 * @param size min size
 * @param included when true it accepts equal value.
 * @param message error message.
 */
export default function build (size: number, included: boolean = true, message: string = `Must be at least ${size} characters long.`): Function {
  return (value: string): boolean | string => {
    if (included) {
      return value.length >= size || message
    } else {
      return value.length > size || message
    }
  }
}
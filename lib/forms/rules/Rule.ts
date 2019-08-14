import { SuccessError } from 'lib/types'

/**
 * Rules for form validation.
 */
export default interface Rule<T> {
  /**
   * Check if value is valid.
   * @param value value to check.
   */
  (value: T): SuccessError
}

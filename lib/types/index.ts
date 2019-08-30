/**
 * ######
 * ###### Contains commonly used types throughout the application
 * ######
 */

import { NuxtAxiosInstance } from '@nuxtjs/axios'

/**
 * When success will return true or else an error message.
 */
export type SuccessError = boolean | string
export type Axios = NuxtAxiosInstance
export type ErrorCallback = (error: Error) => void
export type ValueCallback<T> = (value: T) => void

export interface Toggleable {
  toggle(): void
}

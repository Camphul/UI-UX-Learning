import { Vue } from 'nuxt-property-decorator'

export type NuxtApp = Vue

export interface NuxtContext {
  app: NuxtApp
}

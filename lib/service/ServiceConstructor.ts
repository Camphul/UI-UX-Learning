import { NuxtApp } from '~/lib/types/nuxt'
import Service from '~/lib/service/Service'

export default interface ServiceConstructor {
  new (app: NuxtApp): Service
}

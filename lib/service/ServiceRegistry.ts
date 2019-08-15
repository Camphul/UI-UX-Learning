import Service from './Service'
import Registry from '~/lib/Registry'
import { StringTMap } from '~/lib/types/Maps'

export default class ServiceRegistry implements Registry<Service> {
  private readonly map!: StringTMap<Service>

  private constructor () {
    this.map = {}
  }

  get<T extends Service> (key: string): T {
    const service = this.map[key]
    if (!service) {
      throw new Error('Service not found.')
    }
    return this.map[key] as T
  }

  register (key: string, service: Service): void {
    if (this.map[key]) {
      throw new Error('Service already registered.')
    }
    this.map[key] = service
  }

  static init (): ServiceRegistry {
    return new ServiceRegistry()
  }
}

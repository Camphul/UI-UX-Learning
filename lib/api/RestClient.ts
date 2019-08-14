import { NuxtAxiosInstance } from '@nuxtjs/axios'
import RestRepository from './RestRepository'

export default class RestClient {
  private client: NuxtAxiosInstance;

  constructor (client: NuxtAxiosInstance) {
    this.client = client
  }

  get<T> (path: string, params: object = {}): Promise<any> {
    return this.client.$get<T>(path, {
      params
    })
  }

  post<T> (path: string, body: any, params: object = {}): Promise<T> {
    return this.client.$post<T>(path, body, {
      params
    })
  }

  delete<T> (path: string, params: object = {}): Promise<T> {
    return this.client.$delete<T>(path, {
      params
    })
  }

  resource (resource: string) {
    return new RestRepository(this, resource)
  }
}

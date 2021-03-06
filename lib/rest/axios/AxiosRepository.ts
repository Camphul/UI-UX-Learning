import { Vue } from 'nuxt-property-decorator'
import AxiosRepositoryHttpRequest from './AxiosRepositoryHttpRequest'
import Repository from '~/lib/rest/base/Repository'
import { Axios } from '~/lib/types'

export default class AxiosRepository implements Repository {
  protected app!: Vue
  protected axios!: Axios
  protected resource!: string

  public constructor(resource: string, app: Vue) {
    this.resource = resource
    this.app = app
    this.axios = app.$axios as Axios
  }

  /**
   * Construct a new request base.
   * @param method http method, optional
   */
  protected baseRequest<T>(
    method: string = 'get'
  ): AxiosRepositoryHttpRequest<T> {
    return AxiosRepositoryHttpRequest.init<T>(this.axios, this.resource, method)
  }

  public index(): Promise<any> {
    return this.baseRequest<any>().fetch()
  }

  public create(payload: any): Promise<any> {
    return this.baseRequest<any>('post')
      .withBody(payload)
      .fetch()
  }

  public show(id: string): Promise<any> {
    return this.baseRequest<any>()
      .appendUrl(id)
      .fetch()
  }

  public delete(id: string): Promise<any> {
    return this.baseRequest<any>('delete')
      .appendUrl(id)
      .fetch()
  }

  public getRepositoryResource(): string {
    return this.resource
  }
}

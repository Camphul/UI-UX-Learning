import { Vue } from 'nuxt-property-decorator'
import AxiosRepositoryHttpRequest from './AxiosRepositoryHttpRequest'
import Repository from '~/lib/rest/base/Repository'
import { Axios } from '~/lib/types'
import BlogPostSummary from '~/lib/types/blog/BlogPostSummary'
import Page from '~/lib/rest/types/page'
import { MessageResponse, UUIDResponse } from '~/lib/rest/types'

export default class AxiosRepository implements Repository {
  protected app!: Vue
  protected axios!: Axios
  protected resource!: string

  constructor (resource: string, app: Vue) {
    this.resource = resource
    this.app = app
    this.axios = app.$axios as Axios
  }

  /**
   * Construct a new request base.
   * @param method http method, optional
   */
  protected baseRequest<T> (method: string = 'get'): AxiosRepositoryHttpRequest<T> {
    return AxiosRepositoryHttpRequest.init<T>(this.axios, this.resource, method)
  }

  index (): Promise<any> {
    return this.baseRequest<Page<BlogPostSummary>>().fetch()
  }

  create<P=any> (payload: P): Promise<any> {
    return this.baseRequest<UUIDResponse>('post').withBody(payload).fetch()
  }

  show (id: string): Promise<any> {
    return this.baseRequest<any>().appendUrl(id).fetch()
  }

  delete (id: string): Promise<any> {
    return this.baseRequest<MessageResponse>('delete').appendUrl(id).fetch()
  }

  getRepositoryResource (): string {
    return this.resource
  }
}

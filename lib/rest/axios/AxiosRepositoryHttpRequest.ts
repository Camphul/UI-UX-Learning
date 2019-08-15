import { AxiosRequestConfig, AxiosResponse } from 'axios/index'
import AxiosRepositoryHttpResponse from './AxiosRepositoryHttpResponse'
import RepositoryHttpRequest from '~/lib/rest/http/RepositoryHttpRequest'
import { Axios } from '~/lib/types'

export default class AxiosRepositoryHttpRequest<T> implements RepositoryHttpRequest<T, AxiosResponse, AxiosRepositoryHttpResponse<T>> {
  private resource: string = ''
  private appendedUrl: string = ''
  private payload: any = undefined
  private params: any = undefined
  private httpMethod: string = 'get'
  private axios!: Axios

  constructor (axios: Axios) {
    this.axios = axios
  }

  private buildAxiosRequest (): AxiosRequestConfig {
    const fullUrl = this.resource + this.appendedUrl
    return {
      method: this.httpMethod,
      url: fullUrl,
      params: this.params,
      data: this.payload
    } as AxiosRequestConfig
  }

  method (method: string): this {
    this.httpMethod = method
    return this
  }

  appendUrl (append: string): this {
    if (!this.appendedUrl) {
      this.appendedUrl = ''
    }
    if (!append.startsWith('/')) {
      append = '/' + append
    }
    this.appendedUrl = this.appendedUrl + append
    return this
  }

  execute (): Promise<AxiosRepositoryHttpResponse<T>> {
    const axiosRequest: AxiosRequestConfig = this.buildAxiosRequest()
    return this.axios.request(axiosRequest).then((response: AxiosResponse) => {
      return Promise.resolve(new AxiosRepositoryHttpResponse<T>(response))
    })
  }

  fetch (): Promise<T> {
    return this.execute().then((response) => {
      return Promise.resolve(response.get())
    })
  }

  withBody (payload: any): this {
    this.payload = payload
    return this
  }

  withParams (params: any): this {
    this.params = params
    return this
  }

  forResource (resource: string): this {
    if (!resource.startsWith('/')) {
      resource = '/' + resource
    }
    this.resource = resource
    return this
  }

  static init<E> (axios: Axios, resource: string, httpMethod: string = 'get'): AxiosRepositoryHttpRequest<E> {
    return new AxiosRepositoryHttpRequest<E>(axios).forResource(resource).method(httpMethod)
  }
}

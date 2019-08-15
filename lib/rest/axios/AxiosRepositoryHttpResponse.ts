import { AxiosResponse } from 'axios/index'
import RepositoryHttpResponse from '~/lib/rest/http/RepositoryHttpResponse'

export default class AxiosRepositoryHttpResponse<T> implements RepositoryHttpResponse<T, AxiosResponse> {
  private response!: AxiosResponse

  constructor (response: AxiosResponse) {
    this.response = response
  }

  getNativeHttpClientResponse (): AxiosResponse {
    return this.response
  }

  get (): T {
    return this.response.data as T
  }

  getAny (): any {
    return this.response.data
  }
}

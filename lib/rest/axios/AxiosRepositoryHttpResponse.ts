import { AxiosResponse } from 'axios/index'
import RepositoryHttpResponse from '~/lib/rest/http/RepositoryHttpResponse'

export default class AxiosRepositoryHttpResponse<T>
  implements RepositoryHttpResponse<T, AxiosResponse> {
  private readonly response!: AxiosResponse

  public constructor(response: AxiosResponse) {
    this.response = response
  }

  public getNativeHttpClientResponse(): AxiosResponse {
    return this.response
  }

  public get(): T {
    return this.response.data as T
  }

  public getAny(): any {
    return this.response.data
  }
}

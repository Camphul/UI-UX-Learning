import RestClient from './RestClient'
import Repository from './Repository'
import Page from './types/page'

export default class RestRepository implements Repository {
  private readonly client: RestClient;
  private readonly resource: string;

  constructor (client: RestClient, resource: string) {
    if (!resource.startsWith('/')) {
      resource = '/' + resource
    }
    this.client = client
    this.resource = resource
  }

  create<T> (payload: any): Promise<T> {
    return this.client.post<T>(this.resource, payload)
  }

  delete<T> (id: string): Promise<T> {
    return this.client.delete<T>(`${this.resource}/${id}`)
  }

  index<T> (params: object = {}): Promise<T> {
    return this.client.get<T>(this.resource, params)
  }

  show<T> (id: string): Promise<T> {
    return this.client.get<T>(`${this.resource}/${id}`)
  }

  nextPage<T> (currentPage: Page<T>): Promise<Page<T>> {
    if (currentPage.last) {
      return Promise.reject(new Error('No more pages available.'))
    }
    return this.showPage<T>(currentPage.number + 1)
  }

  previousPage<T> (currentPage: Page<T>): Promise<Page<T>> {
    if (currentPage.first) {
      return Promise.reject(new Error('Already at first page.'))
    }
    return this.showPage<T>(currentPage.number - 1)
  }

  showPage<T> (page: number): Promise<Page<T>> {
    return this.index<Page<T>>({
      page
    })
  }

  nested (id: string, nestedResource: string): RestRepository {
    if (!nestedResource.startsWith('/')) {
      nestedResource = '/' + nestedResource
    }
    return new RestRepository(this.client, this.resource + '/' + id + nestedResource)
  }
}

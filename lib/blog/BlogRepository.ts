import { CreateBlogPostRequest } from './types'
import AxiosPageableRepository from '~/lib/rest/axios/AxiosPageableRepository'
import { MessageResponse, UUIDResponse } from '~/lib/rest/types'
import PageRequestConfig from '~/lib/rest/base/PageRequestConfig'
import Page from '~/lib/rest/types/page'
import BlogPostSummary from '~/lib/types/blog/BlogPostSummary'

export default class BlogRepository extends AxiosPageableRepository {
  public nextPage(page: Page<any>): Promise<Page<BlogPostSummary>> {
    return super.nextPage(page)
  }

  public previousPage(page: Page<any>): Promise<Page<BlogPostSummary>> {
    return super.previousPage(page)
  }

  public showPage(
    request: PageRequestConfig | number = 1
  ): Promise<Page<BlogPostSummary>> {
    return super.showPage(request)
  }

  public index(): Promise<Page<BlogPostSummary>> {
    return super.index()
  }

  public create(payload: CreateBlogPostRequest): Promise<UUIDResponse> {
    return super.create(payload)
  }

  public show(id: string): Promise<any> {
    return super.show(id)
  }

  public delete(id: string): Promise<MessageResponse> {
    return super.delete(id)
  }
}

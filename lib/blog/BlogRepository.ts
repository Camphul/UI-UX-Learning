import { CreateBlogPostRequest } from './types'
import AxiosPageableRepository from '~/lib/rest/axios/AxiosPageableRepository'
import { MessageResponse, UUIDResponse } from '~/lib/rest/types'
import PageRequestConfig from '~/lib/rest/base/PageRequestConfig'
import Page from '~/lib/rest/types/page'
import BlogPostSummary from '~/lib/types/blog/BlogPostSummary'

export default class BlogRepository extends AxiosPageableRepository {
  nextPage (page: Page<any>): Promise<Page<BlogPostSummary>> {
    return super.nextPage(page)
  }

  previousPage (page: Page<any>): Promise<Page<BlogPostSummary>> {
    return super.previousPage(page)
  }

  showPage (request: PageRequestConfig | number = 1): Promise<Page<BlogPostSummary>> {
    return super.showPage(request)
  }

  index (): Promise<Page<BlogPostSummary>> {
    return super.index()
  }

  create (payload: CreateBlogPostRequest): Promise<UUIDResponse> {
    return super.create(payload)
  }

  show (id: string): Promise<any> {
    return super.show(id)
  }

  delete (id: string): Promise<MessageResponse> {
    return super.delete(id)
  }
}

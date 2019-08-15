import AxiosRepository from './AxiosRepository'
import PageableRepository from '~/lib/rest/base/PageableRepository'
import Page, { PageRequest } from '~/lib/rest/types/page'
import PageRequestConfig from '~/lib/rest/base/PageRequestConfig'

export default class AxiosPageableRepository extends AxiosRepository implements PageableRepository {
  nextPage (page: Page<any>): Promise<Page<any>> {
    if (page.last) {
      return Promise.reject(new Error('Already at last page.'))
    }
    return this.showPage(page.number + 1)
  }

  previousPage (page: Page<any>): Promise<Page<any>> {
    if (page.first) {
      return Promise.reject(new Error('Already at first page.'))
    }
    return this.showPage(page.number - 1)
  }

  showPage (request: PageRequest = 1): Promise<Page<any>> {
    let params: any = {}

    if ((request as PageRequestConfig) !== undefined) {
      params = request as PageRequestConfig
    } else {
      const index = request as number
      params = {
        page: index
      }
    }

    return super.baseRequest<Page<any>>().withParams(params).fetch()
  }
}

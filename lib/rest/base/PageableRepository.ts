import Repository from './Repository'
import Page, { PageRequest } from '~/lib/rest/types/page'

export default interface PageableRepository extends Repository {
  /**
   * Get next page
   * @param page current page
   */
  nextPage(page: Page<any>): Promise<Page<any>>

  /**
   * Get previous page
   * @param page
   */
  previousPage(page: Page<any>): Promise<Page<any>>

  /**
   * Show page
   * @param request page request config
   */
  showPage(request: PageRequest): Promise<Page<any>>
}

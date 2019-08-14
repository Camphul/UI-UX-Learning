import Page from './types/page'

export default interface Repository {
  /**
   * Http post
   * @param payload body
   */
  create<T>(payload: any): Promise<T>

  /**
   * Show single id
   * @param id
   */
  show<T>(id: string): Promise<T>

  /**
   * Resource base
   */
  index<T>(): Promise<T>

  /**
   * Delete resource
   * @param id
   */
  delete<T>(id: string): Promise<T>

  /**
   * Navigate to next page when possible
   * @param currentPage
   */
  nextPage<T>(currentPage: Page<T>): Promise<Page<T>>

  /**
   * Navigate to previous page when possible.
   * @param currentPage
   */
  previousPage<T>(currentPage: Page<T>): Promise<Page<T>>

  /**
   * Navigate to specific page
   * @param page
   */
  showPage<T>(page: number): Promise<Page<T>>

  /**
   * Get repo for nested resource
   * @param id
   * @param nestedResource the nested resource
   */
  nested(id: string, nestedResource: string): Repository
}

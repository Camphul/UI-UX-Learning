import Repository from './Repository'
import Page from '~/lib/rest/types/page'

export default interface PageableRepository extends Repository{
  nextPage(page: Page<any>): void
  previousPage(page: Page<any>): void
  showPage(index: number): void
}

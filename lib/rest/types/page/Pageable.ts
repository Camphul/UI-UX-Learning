import Sort from './Sort'

export default interface Pageable {
  sort: Sort
  pageSize: number
  pageNumber: number
  offset: number
  unpaged: boolean
  paged: boolean
}

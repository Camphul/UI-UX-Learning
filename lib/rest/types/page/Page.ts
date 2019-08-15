import Pageable from './Pageable'
import Sort from './Sort'

export default interface Page<T> {
  content: T[]
  pageable: Pageable
  totalPages: number
  totalElements: number
  last: boolean
  first: boolean
  sort: Sort
  number: number
  numberOfElements: number
  size: number
  empty: boolean
}

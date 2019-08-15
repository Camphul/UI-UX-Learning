export default interface Pageable {
  pageSize: number,
  pageNumber: number,
  offset: number,
  unpaged: boolean,
  paged: boolean
}

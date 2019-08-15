export default interface RepositoryHttpResponse<T, N> {
  getNativeHttpClientResponse(): N,

  get (): T,

  getAny (): any
}

export default interface RepositoryHttpResponse<T, RESPONSE> {
  getNativeHttpClientResponse(): RESPONSE,

  get (): T,

  getAny (): any
}

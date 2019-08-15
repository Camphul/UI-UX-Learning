import RepositoryHttpResponse from './RepositoryHttpResponse'
export default interface RepositoryHttpRequest<
  T,
  NATIVERESPONSE,
  RESPONSE extends RepositoryHttpResponse<T, NATIVERESPONSE>
> {
  /**
   * Define http method
   */
  method(method: string): this

  /**
   * Define resource
   * @param resource
   */
  forResource(resource: string): this

  /**
   * Define payload
   * @param payload
   */
  withBody(payload: any): this

  /**
   * Configure params
   * @param params
   */
  withParams(params: any): this

  /**
   * Append url
   * @param append
   */
  appendUrl(append: string): this

  /**
   * Fetch and return entire response.
   */
  execute(): Promise<RESPONSE>

  /**
   * Directly return data in promise
   */
  fetch(): Promise<T>
}

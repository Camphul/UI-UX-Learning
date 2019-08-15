/**
 * Interface used to handle registries.
 */
export default interface Registry<E> {
  get<T extends E>(key: string): T
  register(key: string, service: E): void
}

export default interface Repository {
  index (): Promise<any>
  show (id: string): Promise<any>
  create<P=any> (payload: P): Promise<any>
  delete (id: string): Promise<any>
  getRepositoryResource(): string
}

export default interface Repository {
  index (): Promise<any>
  show (id: string): Promise<any>
  create (payload: any): Promise<any>
  delete (id: string): Promise<any>
  getRepositoryResource(): string
}

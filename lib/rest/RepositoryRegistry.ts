import Repository from '~/lib/rest/base/Repository'
import { StringTMap } from '~/lib/types/Maps'
import Registry from '~/lib/Registry'
export default class RepositoryRegistry implements Registry<Repository> {
  private readonly map!: StringTMap<Repository>

  private constructor () {
    this.map = {}
  }

  public get<T extends Repository> (key: string): T {
    const repo = this.map[key]
    if (!repo) {
      throw new Error('Repository not found.')
    }
    return repo as T
  }

  public register (key: string, repository: Repository): void {
    if (this.map[key]) {
      throw new Error('Repository already registered.')
    }
    this.map[key] = repository
  }

  static init (): RepositoryRegistry {
    return new RepositoryRegistry()
  }
}

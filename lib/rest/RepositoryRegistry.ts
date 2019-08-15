import Repository from '~/lib/rest/base/Repository'
import { StringTMap } from '~/lib/types/Maps'
export default class RepositoryRegistry {
  private map!: StringTMap<Repository>

  private constructor () {
    this.map = {}
  }

  public get<S extends Repository> (key: string): S {
    const repo = this.map[key]
    if (!repo) {
      throw new Error('Repository not found.')
    }
    return repo as S
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

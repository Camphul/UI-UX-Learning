import RepositoryRegistry from '../lib/rest/RepositoryRegistry'

declare module 'vuex' {

  interface Store<S> {
    $repo: RepositoryRegistry
  }
}

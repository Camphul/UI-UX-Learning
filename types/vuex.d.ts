import RepositoryRegistry from '../lib/rest/RepositoryRegistry'
import ServiceRegistry from '../lib/service/ServiceRegistry'
declare module 'vuex' {

  interface Store<S> {
    $repo: RepositoryRegistry
    $service: ServiceRegistry
  }
}

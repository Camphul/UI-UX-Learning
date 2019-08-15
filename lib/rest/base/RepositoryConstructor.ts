import { Vue } from 'nuxt-property-decorator'
import Repository from './Repository'

export default interface RepositoryConstructor {
  new (resource: string, app: Vue): Repository
}

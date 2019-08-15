import { Vue } from 'nuxt-property-decorator'
import RepositoryRegistry from '~/lib/rest/RepositoryRegistry'
import BlogRepository from '~/lib/blog/BlogRepository'
import RepositoryConstructor from '~/lib/rest/base/RepositoryConstructor'
import Repository from '~/lib/rest/base/Repository'
import { NuxtContext } from '~/lib/types/nuxt'

const repositoryRegistry = RepositoryRegistry.init()
function registerRepositories (app: Vue) {
  add(BlogRepository, 'blogs', app)
}

function add (RepostoryConstr: RepositoryConstructor, resource: string, app: Vue, name: string = resource): void {
  const repo: Repository = new RepostoryConstr(resource, app)
  repositoryRegistry.register(name, repo)
}

export default (context: NuxtContext, inject) => {
  // Set the function directly on the context.app object
  registerRepositories(context.app)
  inject('repo', repositoryRegistry)
}

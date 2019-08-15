import { Vue } from 'nuxt-property-decorator'
import { NuxtContext } from '~/lib/types/nuxt'
import ServiceRegistry from '~/lib/service/ServiceRegistry'
import ServiceConstructor from '~/lib/service/ServiceConstructor'
import Service from '~/lib/service/Service'
import BlogService from '~/lib/blog/BlogService'

const serviceRegistry = ServiceRegistry.init()
function registerServices (app: Vue) {
  add(BlogService, app, 'blog')
}

function add (ServiceConstr: ServiceConstructor, app: Vue, name: string): void {
  const serv: Service = new ServiceConstr(app)
  serviceRegistry.register(name, serv)
}

export default (context: NuxtContext, inject) => {
  // Set the function directly on the context.app object
  registerServices(context.app)
  inject('service', serviceRegistry)
}

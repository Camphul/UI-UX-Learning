import RestClient from '../lib/api/RestClient'

export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  const service = new RestClient(app.$axios)
  inject('rest', service)
  inject('restRepo', resource => service.resource(resource))
}

import Service from '~/lib/service/Service'
import { Vue } from '~/node_modules/nuxt-property-decorator'

export default class BlogService implements Service {
  private readonly app!: Vue

  constructor (app: Vue) {
    this.app = app
  }

  hello () {
    console.log('HELLOOO')
  }
}

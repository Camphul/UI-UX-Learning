import Service from '~/lib/service/Service'
import { Vue } from '~/node_modules/nuxt-property-decorator'

export default class BlogService implements Service {
  private readonly app!: Vue

  public constructor(app: Vue) {
    this.app = app
  }

  public hello(): void {
    console.log('HELLOOO')
  }
}

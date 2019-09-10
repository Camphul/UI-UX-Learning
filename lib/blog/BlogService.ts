import { Vue } from 'nuxt-property-decorator'
import Service from '~/lib/service/Service'
import BlogRepository from '~/lib/blog/BlogRepository'
import { CreateBlogPostRequest } from '~/lib/blog/types'
import { UUIDResponse } from '~/lib/rest/types'

export default class BlogService implements Service {
  private readonly app!: Vue
  private readonly blogRepo!: BlogRepository

  public constructor(app: Vue) {
    this.app = app
    this.blogRepo = this.app.$repo.get<BlogRepository>('blogs')
  }

  public create(formData: CreateBlogPostRequest): Promise<UUIDResponse> {
    return this.blogRepo.create(formData)
  }
}

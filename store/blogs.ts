import BlogPostSummary from '~/lib/types/blog/BlogPostSummary'
import { CreateBlogPostRequest } from '~/lib/blog/types'
import PageModuleBuilder from '~/lib/store/PageModuleBuilder'

const builder = PageModuleBuilder.build<BlogPostSummary, CreateBlogPostRequest>('blogs')

export const state = builder.state()

export const actions = builder.actions()

export const getters = builder.getters()

export const mutations = builder.mutations()

import BlogPostSummary from '~/lib/types/blog/BlogPostSummary'
import { CreateBlogPostRequest } from '~/lib/blog/types'
import PageModuleBuilder from '~/lib/store/PageModuleBuilder'
import { CustomizedPageState } from '~/lib/store/Types'

interface BlogsPageState extends CustomizedPageState<BlogPostSummary> {
  customValue: string
}

const builder = PageModuleBuilder.buildCustomizable<BlogPostSummary, BlogsPageState, CreateBlogPostRequest>('blogs')

export const state = builder.stateWith({
  customValue: 'This is a custom value'
})

export const actions = builder.actionsWith({
  customAction ({ commit }) {
    commit('setCustomValue', new Date().toLocaleTimeString())
  }
})

export const getters = builder.gettersWith({
  customGetter (state): string {
    return state.customValue
  }
})

export const mutations = builder.mutationsWith({
  setCustomValue (state, payload: string) {
    state.customValue = payload
  }
})

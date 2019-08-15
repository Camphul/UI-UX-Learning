import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { RootState } from './types'
import BlogPostSummary from '~/lib/types/blog/BlogPostSummary'
import Page, { PageRequest } from '~/lib/rest/types/page'
import BlogRepository from '~/lib/blog/BlogRepository'
import { CreateBlogPostRequest } from '../lib/blog/types'

export interface BlogsState extends Page<BlogPostSummary> {
}

export const state = (): BlogsState => {
  return {
    content: [],
    pageable: {
      sort: {
        unsorted: false,
        sorted: false,
        empty: false
      },
      pageSize: 0,
      pageNumber: 0,
      offset: 0,
      unpaged: false,
      paged: false
    },
    totalPages: 0,
    totalElements: 0,
    last: false,
    first: false,
    sort: {
      unsorted: false,
      sorted: false,
      empty: false
    },
    number: 0,
    numberOfElements: 0,
    size: 0,
    empty: false
  }
}

export const actions: ActionTree<BlogsState, RootState> = {
  create (context, createRequest: CreateBlogPostRequest) {
    // @ts-ignore
    return this.$repo.get<BlogRepository>('blogs').create(createRequest)
  },
  refresh ({ dispatch, state }) {
    return dispatch('query', {
      page: state.number,
      size: state.size
    })
  },
  query ({ commit }, pageConfig: PageRequest = 1) {
    // @ts-ignore
    return this.$repo.get<BlogRepository>('blogs').showPage(pageConfig).then((response: Page<BlogPostSummary>) => {
      return commit('setPage', response)
    })
  },
  increment ({ commit }) {
    commit('increment')
  }
}

export const getters: GetterTree<BlogsState, RootState> = {
  page (state): Page<BlogPostSummary> {
    return state
  },

  content (state): BlogPostSummary[] {
    return state.content
  }
}

export const mutations: MutationTree<BlogsState> = {
  setPage (state, value: Page<BlogPostSummary>) {
    Object.assign(state, value)
  }
}

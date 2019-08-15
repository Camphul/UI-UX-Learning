/**
 * DRY approach on making common vuex modules for page based resourced.
 */
import { ActionTree, GetterTree, MutationTree } from 'vuex'
import Page, { PageRequest } from '~/lib/rest/types/page'
import { RootState } from '~/store/types'
import PageableRepository from '~/lib/rest/base/PageableRepository'
import Repository from '~/lib/rest/base/Repository'

export type PageState<T> = Page<T>
export type PageStateFunction<T> = () => PageState<T>
export type PageActionTree<T> = ActionTree<PageState<T>, RootState>
export type PageGetterTree<T> = GetterTree<PageState<T>, RootState>
export type PageMutationTree<T> = MutationTree<PageState<T>>

export default class PageModuleBuilder<T, C = any> {
  private readonly repositoryName!: string

  private constructor (repositoryName: string) {
    this.repositoryName = repositoryName
  }

  state (): PageStateFunction<T> {
    return () => {
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
  }

  actions (): PageActionTree<T> {
    return this.buildActions(this.repositoryName)
  }

  private buildActions (repoName: string): PageActionTree<T> {
    return {
      create (context, createRequest: C) {
        // @ts-ignore
        return this.$repo.get<Repository>(repoName).create(createRequest)
      },
      refresh ({ dispatch, state }) {
        return dispatch('showPage', {
          page: state.number,
          size: state.size
        })
      },
      showPage ({ commit }, pageConfig: PageRequest = 1) {
        // @ts-ignore
        return this.$repo.get<PageableRepository>(repoName).showPage(pageConfig).then((response: Page<T>) => {
          return commit('setPage', response)
        })
      }
    }
  }

  mutations (): PageMutationTree<T> {
    return {
      setPage (state, value: Page<T>) {
        Object.assign(state, value)
      }
    }
  }

  getters (): PageGetterTree<T> {
    return {
      page (state): Page<T> {
        return state
      },

      content (state): T[] {
        return state.content
      }
    }
  }

  static build<T, C = any> (repositoryName: string) {
    return new PageModuleBuilder<T, C>(repositoryName)
  }
}

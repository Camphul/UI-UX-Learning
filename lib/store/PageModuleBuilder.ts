/**
 * DRY approach on making common vuex modules for page based resourced.
 */
import { PageActionTree, PageGetterTree, PageMutationTree, PageState, PageStateFunction } from './Types'
import Page, { PageRequest } from '~/lib/rest/types/page'
import PageableRepository from '~/lib/rest/base/PageableRepository'

const defaultPageState: PageState<any> = {
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

/**
 * Type T = resource to be found inside page content
 * Type C = type which is used in create
 */
export default class PageModuleBuilder<T, S extends PageState<T> = PageState<T>,
  REPO extends PageableRepository = PageableRepository, C = any> {
  private readonly repositoryName!: string

  private constructor (repositoryName: string) {
    this.repositoryName = repositoryName
  }

  /**
   * Get state for module
   */
  state (): PageStateFunction<T, S> {
    return () => {
      return defaultPageState as S
    }
  }

  /**
   * Get state for module
   */
  stateWith<E extends PageState<T>> (customState: any): PageStateFunction<T, E> {
    return () => {
      return Object.assign(defaultPageState, customState) as E
    }
  }

  /**
   * Get actions for module
   */
  actions (): PageActionTree<T, S> {
    return this.buildActions(this.repositoryName)
  }

  /**
   * Add custom actions
   * @param customActions custom actions to add.
   */
  actionsWith (customActions: PageActionTree<T, S>): PageActionTree<T, S> {
    return Object.assign(this.actions(), customActions)
  }

  /**
   * Build actions for module.
   * @param repoName
   */
  private buildActions (repoName: string): PageActionTree<T, S> {
    return {
      create (context, createRequest: C) {
        return this.$repo.get<REPO>(repoName).create(createRequest)
      },
      refresh ({ dispatch, state }) {
        return dispatch('showPage', {
          page: state.number,
          size: state.size
        })
      },
      showPage ({ commit }, pageConfig: PageRequest = 1) {
        return this.$repo.get<REPO>(repoName).showPage(pageConfig).then((response: Page<T>) => {
          return commit('setPage', response)
        })
      }
    }
  }

  /**
   * Build mutations for module
   */
  mutations (): PageMutationTree<T, S> {
    return {
      setPage (state, value: Page<T>) {
        Object.assign(state, value)
      }
    }
  }

  /**
   * Build mutations with custom ones added.
   * @param customMutations custom mutations.
   */
  mutationsWith (customMutations: PageMutationTree<T, S>): PageMutationTree<T, S> {
    return Object.assign(this.mutations(), customMutations)
  }

  /**
   * Build getters for module
   */
  getters (): PageGetterTree<T, S> {
    return {
      page (state): Page<T> {
        return state
      },

      content (state): T[] {
        return state.content
      }
    }
  }

  /**
   * Use getters and add your own
   * @param customGetters
   */
  gettersWith (customGetters: PageGetterTree<T, S>): PageGetterTree<T, S> {
    return Object.assign(this.getters(), customGetters)
  }

  /**
   * Build new module
   * @param repositoryName
   */
  static build<T, REPO extends PageableRepository = PageableRepository, C = any> (repositoryName: string) {
    return new PageModuleBuilder<T, PageState<T>, REPO, C>(repositoryName)
  }

  /**
   * Build new module allowing for custom state, actions, mutations, getters
   * @param repositoryName
   */
  static buildCustomizable<T, S extends PageState<T>, REPO extends PageableRepository = PageableRepository, C = any> (repositoryName: string) {
    return new PageModuleBuilder<T, S, REPO, C>(repositoryName)
  }
}

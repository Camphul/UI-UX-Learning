import { ActionTree, GetterTree, MutationTree } from 'vuex'
import Page from '../rest/types/page'

// Used as base page state type for pagination based store modules
export type PageState<T> = Page<T>
// Type which defines a state function
export type PageStateFunction<
  T,
  E extends PageState<T> = PageState<T>
> = () => E
// Type which defines pagination actions in a module
export type PageActionTree<
  T,
  E extends PageState<T> = PageState<T>
> = ActionTree<E, RootState>
// Defines getters in a paginated module
export type PageGetterTree<
  T,
  E extends PageState<T> = PageState<T>
> = GetterTree<E, RootState>
// Defines mutations inside a module
export type PageMutationTree<
  T,
  E extends PageState<T> = PageState<T>
> = MutationTree<E>
// Extend this interface to easily add more state values to store module
export interface CustomizedPageState<T> extends Page<T> {}
// Root state
export interface RootState {}
// VueX action return type
export type VuexResult = any

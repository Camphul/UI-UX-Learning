import { GetterTree } from 'vuex'
import { RootState } from '../types'
import { CounterState } from './types'

/**
 * Counter getters
 */
export const getters: GetterTree<CounterState, RootState> = {
  getValue (state): number {
    return state.count
  }
}

export default getters

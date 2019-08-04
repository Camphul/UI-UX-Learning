import { GetterTree } from 'vuex';
import { CounterState } from './types';
import { RootState } from '../types';

/**
 * Counter getters
 */
export const getters: GetterTree<CounterState, RootState> = {
  getValue(state): number {
    return state.count;
  }
};

export default getters;

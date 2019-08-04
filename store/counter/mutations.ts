import { MutationTree } from 'vuex';
import { CounterState } from './types';

/**
 * Counter mutations
 */
export const mutations: MutationTree<CounterState> = {
  increment(state, amount: number = 1): void {
    state.count += amount;
  },
  setValue(state, value: number): void {
    state.count = value;
  }
};

export default mutations;

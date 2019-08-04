import { ActionContext, ActionTree } from 'vuex/types';
import { CounterState } from './types';
import { RootState } from '../types';

/**
 * Counter actions
 */
export const actions: ActionTree<CounterState, RootState> = {
  setValue({commit}, amount: number=0) {
    commit('setValue', amount)
  },
  increment({ commit }) {
    commit('increment');
  }
};

export default actions;

import { Module } from 'vuex'
import { namespace } from 'nuxt-property-decorator'
import { RootState } from '../types'
import getters from './getters'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import { CounterState } from './types'

const namespaced: boolean = true

export const counter: Module<CounterState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

export const CounterStore = namespace('counter/')

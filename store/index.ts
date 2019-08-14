export const state = () => ({
  version: '1.0'
})

export const getters = {
  version (state) {
    return state.version
  }
}

const mod = {
  state: {
    count: 0
  },
  mutations: {
    increment (state, val) {
      state.count += val
    }
  },
  actions: {
    increment ({commit}, val) {
      commit('increment', val)
    }
  }
}

export default mod

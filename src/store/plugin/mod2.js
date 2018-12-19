const mod2 = {
  state: {
    count: 0
  },
  mutations: {
    increment2 (state, val) {
      state.count += val
    }
  },
  actions: {
    increment2 ({commit}, val) {
      commit('increment', val)
    }
  }
}

export default mod2

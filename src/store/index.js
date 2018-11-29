import Vue from 'vue'
import Vuex from 'vuex'

import mod from './plugin/mod'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    mod
  },
  getters
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageInnerWidth: 0,
  },
  getters: {
    pageInnerWidth: state => state.pageInnerWidth,
  },
  mutations: {
    setPageInnerWidth: (state, innerWidth) => (state.pageInnerWidth = innerWidth),
  },
  actions: {
  },
  modules: {
  }
})

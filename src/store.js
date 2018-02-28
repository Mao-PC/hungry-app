import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  guides: [{
    select: true, showDot: false
  }, {
    select: false, showDot: false
  }, {
    select: false, showDot: false
  }, {
    select: false, showDot: false
  }]
}

const getters = {
  guides: (state) => {
    return state.guides
  }
}

const actions = {
  indexChange: ({commit}, index) => {
    commit('indexChange', index)
  }
}

const mutations = {
  indexChange (state, index) {
    state.guides.forEach((item, i) => {
      if (i === index) {
        item.select = true
      } else {
        item.select = false
      }
    })
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

import Vue from 'vue'

const state = {
  expData: []
}

const getters = {
  expData: (state) => { return state.expData }
}

const actions = {
  setData: ({commit}) => {
    Vue.http.get('/explore/queryexplore').then(
      (res) => {
        if (res.ok) {
          commit('setData', res.data)
        }
      }
    )
  }
}

const mutations = {
  setData (state, data) {
    state.expData = data
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

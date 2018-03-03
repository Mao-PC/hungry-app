import Vue from 'vue'

const state = {
  expData: []
}

const getters = {
  expData: (state) => { return state.expData }
}

const actions = {
  // 初始化页面调用MongoDB获取数据
  initData: ({dispatch}) => {
    dispatch('setData')
  },
  // 保存数据
  setData: ({commit}, pageInfo) => {
    // Vue.http.get('/explore/queryexplore', pageInfo || {pageIndex: 1, pageSize: 5}).then(
    Vue.http.jsonp('/explore/queryexplore', {pageIndex: 1}).then(
      (res) => {
        if (res.ok) {
          commit('setData', res.data)
        }
      },
      (err) => {
        alert('发生错误 ! \n' + err)
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

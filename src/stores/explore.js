import axios from 'axios'

const state = {
  expData: [],
  pageInfo:{
    pageIndex: 0,
    pageSize:5
  }
}

const getters = {
  expData: (state) => { return state.expData }
}

const actions = {
  // 初始化页面调用MongoDB获取数据
  queryData: ({dispatch}, pageInfo) => {
    dispatch('setData', pageInfo)
  },
  // 保存数据
  setData: ({commit}, pageInfo) => {
    let url = '/explore/queryexplore?'
    if (pageInfo) {
      url += 'pageIndex=' + pageInfo.pageIndex || 1 + '&pageSize=' + pageInfo.pageSize || 5
    } else {
      url += 'pageIndex=1&pageSize=5'
    }
    axios.get(url).then(
      (res) => {
        if (res.status === 200) {
          commit('setData', res.data)
        }
      },
      (err) => {
        console.log(err)
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

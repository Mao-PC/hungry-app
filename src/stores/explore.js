import axios from 'axios'

const state = {
  expData: [],
  pageInfo: {
    pageIndex: 1,
    pageSize: 5
  },
  isAllData: false // 是否已经是全部数据
}

const getters = {
  expData: (state) => { return state.expData },
  isAllData: (state) => { return state.isAllData }
}

const actions = {
  // 初始化页面调用MongoDB获取数据
  queryData: ({dispatch}, pageInfo) => {
    if (!state.isAllData) {
      dispatch('setData', pageInfo)
    }
  },
  // 保存数据
  setData: ({commit}, pageInfo) => {
    let url = '/explore/queryexplore?'
    if (pageInfo) {
      url += 'pageIndex=' + (pageInfo.pageIndex || 1) + '&pageSize=' + (pageInfo.pageSize || 5)
    } else {
      url += 'pageIndex=1&pageSize=5'
    }
    setTimeout(() => {
      let {pageIndex, pageSize} = pageInfo
      let {ypageIndex, ypageSize} = state.pageInfo
      if (pageIndex !== ypageIndex || pageSize !== ypageSize) {
        console.log(url)
        axios.get(url).then(
          (res) => {
            if (res.status === 200) {
              commit('setData', {pageInfo: pageInfo, data: res.data})
            }
          },
          (err) => {
            console.log(err)
            alert('发生错误 ! \n' + err)
          }
        )
      }
    }, 30)
  }
}

const mutations = {
  setData (state, res) {
    console.log(res.pageInfo)
    console.log(res.data)
    if (res.data) {
      if (state.expData) {
        state.expData = state.expData.concat(res.data)
      } else {
        state.expData = res.data
      }
      // 是否已经是全部的数据
      if (res.data.length < state.pageInfo.pageSize) {
        state.isAllData = true
      } else {
        state.isAllData = false
      }
    } else {
      state.isAllData = true
    }
    if (!state.isAllData) {
      if (res.pageInfo) {
        let {pageIndex, pageSize} = res.pageInfo
        let {ypageIndex, ypageSize} = state.pageInfo
        if (pageIndex !== ypageIndex || pageSize !== ypageSize) {
          state.pageInfo = res.pageInfo
        }
      }
    }
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

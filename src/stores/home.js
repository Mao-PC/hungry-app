import Vue from 'vue'

const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const state = {
  // 导航
  guides: [{
    select: true, showDot: false
  }, {
    select: false, showDot: false
  }, {
    select: false, showDot: false
  }, {
    select: false, showDot: false
  }],
  // 广告
  ads: imgList.map((item, index) => ({
    url: 'javascript:',
    img: item
  })),
  // 通知
  msg: '6666666',
  // 商品信息
  goodData: []
}

const getters = {
  guides: (state) => { return state.guides },
  ads: (state) => { return state.ads },
  msg: (state) => { return state.msg },
  goodData: (state) => { return state.goodData }
}

const actions = {
  // Guide的点击切换页面
  indexChange: ({commit}, index) => {
    commit('indexChange', index)
  },
  // 存储后台查询商品结果
  saveGoodData: ({commit}) => {
    Vue.http.get('/home/querygood').then(
      (res) => {
        if (res.ok) {
          commit('saveGoodData', res.data)
        }
      },
      (err) => {
        alert('发生错误 ! \n' + err)
      }
    )
  }
}

const mutations = {
  // Guide的点击切换页面
  indexChange (state, index) {
    state.guides.forEach((item, i) => {
      if (i === index) {
        item.select = true
      } else {
        item.select = false
      }
    })
  },
  // 存储后台查询商品结果
  saveGoodData (state, data) {
    state.goodData = data
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

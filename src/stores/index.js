import Vue from 'vue'
import Vuex from 'vuex'

import home from './home'
import message from './message'
import explore from './explore'
import mine from './mine'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home: home,
    message: message,
    explore: explore,
    mine: mine
  }
})

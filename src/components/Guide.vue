<template>
  <div>
    <home class="body" v-if="guides[0].select"></home>
    <message class="body" v-if="guides[1].select"></message>
    <explore class="body" v-if="guides[2].select"></explore>
    <mine class="body" v-if="guides[3].select"></mine>
    <tabbar @on-index-change="indexChange">
      <tabbar-item :selected="guides[0].select" :show-dot="guides[0].showDot">
        <img slot="icon" src="../assets/nav/icon_nav_button.png">
        <span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item :selected="guides[1].select" :show-dot="guides[1].showDot">
        <img slot="icon" src="../assets/nav/icon_nav_msg.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item :selected="guides[2].select" :show-dot="guides[2].showDot">
        <img slot="icon" src="../assets/nav/icon_nav_article.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item :selected="guides[3].select" :show-dot="guides[3].showDot">
        <img slot="icon" src="../assets/nav/icon_nav_cell.png">
        <span slot="label">Mine</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import { Tabbar, TabbarItem } from 'vux'
import Home from './Home/Home'
import Explore from './Explore/Explore'
import Message from './Message/Message'
import Mine from './Mine/Mine'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Home,
    Explore,
    Message,
    Mine
  },

  computed: {
    ...mapState({
      guides: state => state.home.guides
    })
  },

  methods: {
    ...mapActions([
      'indexChange'
    ])
  }
}
</script>

<style>
.body {
  margin-bottom: 10em
}
</style>

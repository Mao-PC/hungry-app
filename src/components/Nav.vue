<template>
  <tabbar>
    <tabbar-item>
      <img slot="icon" src="../assets/nav/icon_nav_button.png">
      <span slot="label">Home</span>
    </tabbar-item>
    <tabbar-item show-dot>
      <img slot="icon" src="../assets/nav/icon_nav_msg.png">
      <span slot="label">Message</span>
    </tabbar-item>
    <tabbar-item selected>
      <img slot="icon" src="../assets/nav/icon_nav_article.png">
      <span slot="label">Explore</span>
    </tabbar-item>
    <tabbar-item badge="2">
      <img slot="icon" src="../assets/nav/icon_nav_cell.png">
      <span slot="label">News</span>
    </tabbar-item>
  </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>

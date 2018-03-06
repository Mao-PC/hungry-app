<template>
  <div>
    <x-header :left-options="{showBack: false}">大牌活动专场</x-header>
    <div class="mask" v-for="exp in expData" :key="exp._id">
        <div class="mask-title">{{exp.title}}</div>
        <div class="mask-date">
          <span>{{exp.date}}</span>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { XHeader } from 'vux'
import { scrollBottom } from '../../utils/utils'

export default {
  components: { XHeader },

  mounted () {
    // 初始化数据
    this.initData({pageInfo: {pageIndex: 1, pageSize: 5}})
    // 添加页面的滚动监听
    scrollBottom()
  },

  computed: {
    ...mapState({
      expData: state => state.explore.expData
    })
  },

  methods: {
    ...mapActions({
      initData: 'initData',
      setData: 'setData'
    })
  }
}
</script>

<style lang="less" scoped>
.mask {
  height: 8em;
  margin: .5em;
  color: #ffffff;
  border-radius: 2px;
  background-color: rgb(125,124,126);
  text-align: center;
  .mask-title {
    padding-top: 2.5em;
  }
  .mask-date {
    margin: 0.5em auto;
    max-width: 6em;
    font-size: 13px;
    border-top: solid 1px #ffffff;
  }
}
</style>

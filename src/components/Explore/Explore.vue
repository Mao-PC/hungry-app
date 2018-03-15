<template>
  <div>
    <x-header :left-options="{showBack: false}">大牌活动专场</x-header>
    <div class="mask" v-for="(exp, index) in expData" :key="index">
        <div class="mask-title">{{exp.title}}</div>
        <div class="mask-date">
          <span>{{exp.date}}</span>
        </div>
      </div>
      <load-more :show-loading="showloading" :tip="tip"></load-more>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { XHeader, LoadMore } from 'vux'
import { scrollBottom } from '../../utils/utils'

export default {
  components: { XHeader, LoadMore },

  mounted: function () {
    if (this.expData == null || this.expData.length === 0) {
      // 初始化数据
      this.queryData(this.pageInfo)
    }
    // 添加页面的滚动监听
    scrollBottom(
        this.getMore.bind(this)
      )
  },

  data () {
    return {
      tip: '正在加载',
      showloading: true
    }
  },

  computed: {
    reTip: {
      get: function () {
        this.tip = '正在加载'
      },
      set: function (data) {
        this.tip = data
      }
    },
    reShowloading: {
      get: function () {
        this.showloading = true
      },
      set: function (data) {
        this.showloading = data
      }
    },
    ...mapState({
      expData: state => state.explore.expData,
      pageInfo: state => state.explore.pageInfo,
      isAllData: state => state.explore.isAllData
    })
  },

  methods: {
    getMore () {
      // 显示加载
      this.showloading = true
      let pageInfo = {
        pageIndex: this.pageInfo.pageIndex + 1,
        pageSize: this.pageInfo.pageSize
      }
      // console.log(this.isAllData)
      if (!this.isAllData) {
        this.queryData(pageInfo)
        // this.showloading = false
      } else {
        this.tip = '我是有底线的'
        this.showloading = false
      }
    },
    ...mapActions({
      queryData: 'queryData'
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

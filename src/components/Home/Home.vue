<template>
  <div>
    <group class="header">
      <x-icon type="qr-scanner" style="padding: 10px 15px"></x-icon>
      <x-input class="query-area" placeholder="请输入查询内容">
        <x-icon slot="label" type="android-search"></x-icon>
      </x-input>
      <x-icon type="android-notifications-none"  style="padding: 10px 15px"></x-icon>
    </group>
    <swiper :list="ads" auto loop height="10em" dots-position="center"></swiper>
    <grid :cols="5" class="operation-area">
      <grid-item v-for="i in 10" :key="i">
        <template v-if="i < 10">
          <img slot="icon" src="../../assets/home/operation.png" alt="操作png">
          <span slot="label">操作{{i}}</span>
        </template>
        <template v-else>
          <img slot="icon" src="../../assets/home/more.png" alt="更多png">
          <span slot="label">更多..</span>
        </template>
      </grid-item>
    </grid>
    <group class="home-msg">
      <x-input :value="msg" :show-clear="false" readonly>
        <template slot="label">
          <x-icon type="android-bulb" size="18px"></x-icon>
          <span> 通知：</span>
        </template>
      </x-input>
    </group>
    <group class="sugguts-title">
      <cell title="为您推荐">
        <span slot style=" right:0">更多</span>
      </cell>
    </group>
    <grid :cols="3">
      <grid-item v-for="i in 3" :key="i" class="sugguts-area">
        <div>XX推荐</div>
        <div>XXX收益</div>
        <div>产品说明</div>
        <div>产品名称</div>
      </grid-item>
    </grid>
    <stores></stores>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import { Swiper, XButton, Divider, Group, XInput, Grid, GridItem, GroupTitle, Cell } from 'vux'
import Stores from './Stores'

export default {
  components: {
    Swiper,
    XButton,
    XInput,
    Divider,
    Group,
    Grid,
    GridItem,
    GroupTitle,
    Cell,
    Stores
  },
  beforeCreate () {
    this.$http.get('/home/querygood').then(
      (res) => {
        if (res.ok) {
          this.saveGoodData(res.data)
        }
      }
    )
  },
  mounted () {
    // style 里的display=flex 失效, 在这里处理
    let cell = document.getElementsByClassName('header')[0].getElementsByClassName('weui-cells')[0]
    cell.style.display = 'flex'
    cell.style.marginTop = 0
    cell.style.backgroundColor = 'rgba(0,0,0, 0.1)'
  },
  computed: {
    ...mapState({
      ads: state => state.home.ads,
      msg: state => state.home.msg
    })
  },
  methods: {
    ...mapActions({
      saveGoodData: 'saveGoodData'
    })
  }
}
</script>

<style lang="less">
.weui-cells {
  margin: 0 !important;
}
.header {
  position: fixed;
  z-index: 2;
  width: 100%;
  .weui-cells {
    background-color: rgba(0, 0, 0, 0.1);
  }
  .query-area {
    width: 80%;
  }
}
.operation-area {
  background-color: #ffffff;
}

.home-msg {
  margin-top: 10px;
}
.sugguts-title {
  width: 100%;
  margin: 0;
  margin-top: 10px;
}

.sugguts-area {
  background-color: #ae753e;
  border: 2px solid #ffffff;
  div {
    text-align: center;
    color: #ffffff;
  }
}

.good-items {
  width: 100%;
  height: 10em;
  background-color: red;
  margin-top: 0.5em;
}
</style>
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
          <img slot="icon" src="../assets/home/operation.png" alt="操作png">
          <span slot="label">操作{{i}}</span>
        </template>
        <template v-else>
          <img slot="icon" src="../assets/home/more.png" alt="更多png">
          <span slot="label">更多..</span>
        </template>
      </grid-item>
    </grid>
    <group class="home-msg">
      <x-input v-model="msg" :show-clear="false" readonly>
        <template slot="label">
          <x-icon type="android-bulb" size="18px"></x-icon>
          <span> 通知：</span>
        </template>
      </x-input>
    </group>
    <group class="sugguts-title">
      <cell title="为您推荐">
        <span slot="value" style=" right:0">更多</span>
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
    <div class="good-item" style="width:100%; height:10em; background-color: red; margin-top: 0.5em" v-for="i in 10" :key="i">

    </div>
  </div>
</template>

<script>
import { Swiper, XButton, Divider, Group, XInput, Grid, GridItem, GroupTitle, Cell } from 'vux'

const imgList = [
  'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
  'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
  'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
]

const adList = imgList.map((item, index) => ({
  url: 'javascript:',
  img: item
}))

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
    Cell
  },
  mounted () {
    // style 里的display=flex 失效, 在这里处理
    let cell = document.getElementsByClassName('header')[0].getElementsByClassName('weui-cells')[0]
    cell.style.display = 'flex'
    cell.style.marginTop = 0
    cell.style.backgroundColor = 'rgba(0,0,0, 0.1)'
  },
  data () {
    return {
      ads: adList,
      msg: '6666666'
    }
  }
}
</script>

<style lang="less">
.weui-cells {
  margin: 0 !important
}
.header {
  position: fixed;
  z-index: 2;
  .weui-cells {
    background-color: rgba(0,0,0, 0.1);
  }
  .query-area {
    width: 80%;
  }
}
.operation-area {
  background-color: #ffffff;
}

.home-msg {
  margin-top: 10px
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
    color: #ffffff
  }
}
</style>
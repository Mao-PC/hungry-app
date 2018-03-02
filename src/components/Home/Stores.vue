<template>
  <div style="background: rgb(251,249,254);">
    <div class="store" v-for="data in goodData" :key="data._id">
      <div class="left">
        <img src="../../assets/home/good.png" alt="商品样图">
      </div>
      <div class="right">
        <div><span>商品名称：</span>{{data.name ? data.name : '忘起名字了'}}</div>
        <div><span>商品价格：</span>{{data.price ? data.price : '不知道多钱'}}</div>
        <div><span>评分：</span>
        <rater disabled :min=1 :value="data.grade ? data.grade : 1"></rater>
        <!-- {{data.grade ? data.grade : '没有人给过评价'}} -->
        </div>
        <div><span>描述：</span>{{data.description ? data.description : '商家太懒了, 没有描述'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { Rater } from 'vux'

export default {
  components: { Rater },
  computed: {
    ...mapState({
      goodData: state => state.home.goodData
    })
  },
  methods: { }
}
</script>

<style lang="less" scoped>
.store {
  width: 100%;
  display: flex;
  background: #ffffff;
  margin-top: .5em;
  border-top: solid 1px rgb(236,236,236);
  border-bottom: solid 1px rgb(236,236,236);
  .left {
    margin-right: .5em
  }
  .right {
    div {
      display: flex;
      span {
        display: block;
        width: 5em;
        margin-right: .5em;
      }
    }
  }
}
</style>

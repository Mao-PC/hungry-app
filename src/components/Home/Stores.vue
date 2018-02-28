<template>
  <div>
    <template>
      <div>{{goodDate}}</div>
      <img src="../../assets/home/good.png" alt="商品样图">
    </template>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { } from 'vux'

export default {
  components: { },
  computed: {
    ...mapState({
      goodDate: state => state.home.goodDate
    })
  },
  methods: { }
}
</script>

<style>

</style>

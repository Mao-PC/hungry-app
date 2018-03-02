<template>
  <div>
    <div class="mask" v-for="exp in expData" :key="exp._id">
        <div class="mask-title">{{exp.title}}</div>
        <div slot="content" class="m-title">
          <span>2016-03-18</span>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { } from 'vux'

export default {
  components: { },

  mounted () {
    this.setData()
  },

  computed: {
    ...mapState({
      expData: state => state.explore.expData
    })
  },

  methods: {
    ...mapActions({
      setData: 'setData'
    })
  }
}
</script>

<style lang="less" scoped>
.mask {
  border-radius: 2px;
  background-color: rgb(125,124,126);
  // .mask-title {

  // }
}
</style>

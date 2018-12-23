<template>
  <div class="data">
    <bg-color>
      <y-search></y-search>
    </bg-color>

    <bg-color :header="header1">
      <introduce :msg="introduceData"></introduce>
    </bg-color>

    <data-item v-for="(li,index) in dataItemList" :key="index" :item="li"></data-item>
  </div>
</template>

<script>
import introduce from 'components/modules/introduce'
import dataItem from 'components/modules/data-item'

import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      header1: '翱坤数据库中心'
    }
  },
  components: {
    introduce,
    dataItem
  },
  computed: {
    ...mapGetters([
      'dataItemList',
      'introduceData'
    ])
  },
  methods: {
    ...mapActions([
      'getItemList',
      'getIntroduce'
    ])
  },
  created () {
    this.getItemList()
    this.getIntroduce()
  }
}
</script>

<style lang="scss" scoped>

</style>

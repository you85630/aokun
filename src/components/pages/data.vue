<template>
  <div class="data">
    <bg-color>
      <y-search></y-search>
    </bg-color>

    <bg-color :header="header1">
      <introduce></introduce>
    </bg-color>

    <bg-color>
        <data-item v-for="(li,index) in itemList" :key="index" :item="li"></data-item>
    </bg-color>
  </div>
</template>

<script>
import introduce from 'components/modules/introduce'
import dataItem from 'components/modules/data-item'

import { mapActions } from 'vuex'
export default {
  components: {
    introduce,
    dataItem
  },
  data () {
    return {
      header1: '翱坤数据库中心',
      itemList: [
        {
          name: 'CAAC知识中心',
          link: '',
          info: '及时获取与端到端车辆和产品设计的网络物理安全性，风险缓解，劳动力开发资源，培训，标准等相关的权威信息。',
          cover: 'http://pbsbjhfvy.bkt.clouddn.com/img-6.jpeg'
        }, {
          name: 'FAA知识中心',
          link: '',
          info: '及时获取与端到端车辆和产品设计的网络物理安全性，风险缓解，劳动力开发资源，培训，标准等相关的权威信息。',
          cover: 'http://pbsbjhfvy.bkt.clouddn.com/img-6.jpeg'
        }, {
          name: 'EASA知识中心',
          link: '',
          info: '及时获取与端到端车辆和产品设计的网络物理安全性，风险缓解，劳动力开发资源，培训，标准等相关的权威信息。',
          cover: 'http://pbsbjhfvy.bkt.clouddn.com/img-6.jpeg'
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'searchData'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>

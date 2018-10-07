<template>
  <div class="data">
    <bg-color>
      <search-box :selectBox="searchSelect" @on-search="search"></search-box>
    </bg-color>

    <bg-color>
      <introduce></introduce>
    </bg-color>

    <bg-color>
        <item-box v-for="(li,index) in itemList" :key="index" :item="li"></item-box>
    </bg-color>
  </div>
</template>

<script>
import searchBox from 'components/common/search'
import introduce from 'components/modules/data/introduce'
import itemBox from 'components/modules/data/item-box'

import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    searchBox,
    introduce,
    itemBox
  },
  data () {
    return {
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
  computed: {
    ...mapGetters([
      'searchSelect'
    ])
  },
  methods: {
    ...mapActions([
      'searchData'
    ]),
    search (key) {
      sessionStorage.setItem('key', JSON.stringify(key))
      this.$router.push('/search')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

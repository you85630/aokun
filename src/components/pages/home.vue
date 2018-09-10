<template>
  <div class="home">
    <bg-color>
      <bg-img :img="searchkey.bgimg">
        <index-search :searchkey="searchkey" @on-search="searchHome"></index-search>
      </bg-img>
    </bg-color>

    <bg-color>
      <bg-img :img="searchkey.bgimg">
        <y-carousel :list='imgList'></y-carousel>
      </bg-img>
    </bg-color>

    <bg-color>
      <y-resource :list="linklist"></y-resource>
    </bg-color>

    <bg-color>
      <sub-nav :list="sublist"></sub-nav>
    </bg-color>
  </div>
</template>

<script>
import indexSearch from 'components/modules/home/index-search'
import yCarousel from 'components/modules/home/carousel'
import yResource from 'components/modules/home/resource'
import subNav from 'components/modules/home/sub-nav'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    indexSearch,
    yCarousel,
    yResource,
    subNav
  },
  computed: {
    ...mapGetters([
      'searchkey',
      'imgList',
      'linklist',
      'sublist'
    ])
  },
  methods: {
    ...mapActions([
      'getImg',
      'getiImgList',
      'searchHome',
      'getResource'
    ])
  },
  created () {
    this.getImg()
    this.getiImgList()
    this.getResource()
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
}
</style>

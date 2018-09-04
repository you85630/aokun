<template>
  <div class="home">
    <bg-color>
      <bg-img :img="bgimg">
        <index-search :searchkey="searchkey" @search="search"></index-search>
      </bg-img>
    </bg-color>

    <bg-color>
      <bg-img :img="bgimg">
        <y-carousel :header="imgtitle" :list='imgList'></y-carousel>
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
      'bgimg',
      'searchkey',
      'imgtitle',
      'imgList',
      'linklist',
      'sublist'
    ])
  },
  methods: {
    ...mapActions([
      'search',
      'getCarousel',
      'getResource'
    ])
  },
  created () {
    // this.getCarousel()
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

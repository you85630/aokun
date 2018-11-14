<template>
  <div class="home">
    <div class="img-box">
      <img :src="searchkey.bgimg" alt="">
      <index-search :searchkey="searchkey" @on-search="searchHome"></index-search>
    </div>

    <bg-color :img="searchkey.bgimg">
      <y-carousel :list='imgList'></y-carousel>
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
import indexSearch from 'components/modules/index-search'
import yCarousel from 'components/modules/carousel'
import yResource from 'components/modules/resource'
import subNav from 'components/modules/sub-nav'

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
      'getiImgList'
    ]),
    searchHome (key) {
      sessionStorage.setItem('key', JSON.stringify(key))
      this.$router.push('/search')
    }
  },
  created () {
    this.getImg()
    this.getiImgList()
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
}
.img-box{
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  width: 100%;
  img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
}
</style>

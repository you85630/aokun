<template>
  <div class="learn">
    <bg-color>
      <y-search></y-search>
    </bg-color>

    <bg-color :header="header1">
      <login></login>
    </bg-color>

    <bg-color :header="header2">
      <about :video="videoBox" :list="aboutBox"></about>
    </bg-color>
  </div>
</template>

<script>
import login from 'components/modules/login'
import about from 'components/modules/about-me'

import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      header1: '翱坤数据库',
      header2: '什么是翱坤数据库？'
    }
  },
  components: {
    login,
    about
  },
  computed: {
    ...mapGetters([
      'videoBox',
      'aboutBox'
    ])
  },
  methods: {
    ...mapActions([
      'getStudy',
      'searchData'
    ])
  },
  created () {
    this.getStudy()
  }
}
</script>

<style lang="scss" scoped>
</style>

<template>
  <div class="learn">
    <bg-color>
      <y-search :list="moreLeftNavBox"></y-search>
    </bg-color>

    <bg-color>
      <login></login>
    </bg-color>

    <bg-color>
      <about :video="videoBox" :list="aboutBox"></about>
    </bg-color>
  </div>
</template>

<script>
import login from 'components/modules/login'
import about from 'components/modules/about-me'

import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    login,
    about
  },
  computed: {
    ...mapGetters([
      'videoBox',
      'aboutBox',
      'moreLeftNavBox'
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

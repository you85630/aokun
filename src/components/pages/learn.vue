<template>
  <div class="learn">
    <bg-color>
      <search-box></search-box>
    </bg-color>

    <bg-color>
      <login></login>
    </bg-color>

    <about :video="videoBox" :list="aboutBox"></about>
  </div>
</template>

<script>
import searchBox from 'components/common/search'
import login from 'components/modules/learn/login'
import about from 'components/modules/learn/about'

import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    searchBox,
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
      'getStudy'
    ])
  },
  mounted () {
    this.getStudy()
  }
}
</script>

<style lang="scss" scoped>
.learn{}
</style>

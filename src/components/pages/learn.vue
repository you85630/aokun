<template>
  <div class="learn">
    <bg-color>
      <search-box :selectBox="searchSelect" @on-search="search"></search-box>
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
      'searchSelect',
      'videoBox',
      'aboutBox'
    ])
  },
  methods: {
    ...mapActions([
      'getStudy',
      'searchData'
    ]),
    search (key) {
      sessionStorage.setItem('key', JSON.stringify(key))
      this.$router.push('/search')
    }
  },
  mounted () {
    this.getStudy()
  }
}
</script>

<style lang="scss" scoped>
</style>

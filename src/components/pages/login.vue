<template>
  <div class="learn">
    <bg-color>
      <y-search :selectBox="searchSelect" @on-search="search"></y-search>
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
  created () {
    this.getStudy()
  }
}
</script>

<style lang="scss" scoped>
</style>

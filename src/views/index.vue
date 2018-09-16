<template>
  <div class="index">
    <y-header :nav="navList" :user="user" @go="login" @out="exit"></y-header>
    <div class="container">
      <router-view/>
    </div>
    <y-footer :title="title" :footer="footerList" :icon="iconList"></y-footer>
  </div>
</template>

<script>
import yHeader from 'components/common/header'
import yFooter from 'components/common/footer'

import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    yHeader,
    yFooter
  },
  mounted () {
    this.getCompany()
    this.getResource()
  },
  computed: {
    ...mapGetters([
      'navList',
      'user',
      'title',
      'iconList',
      'footerList'
    ])
  },
  methods: {
    ...mapActions([
      'exit',
      'login',
      'getCompany',
      'getResource'
    ])
  }
}
</script>

<style lang="scss" scoped>
.index{
  width: 100%;
}
.container{
  margin: 0 auto;
  min-height: 77vh;
  width: 1180px;
}
</style>

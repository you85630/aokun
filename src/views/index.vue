<template>
  <div class="index">
    <y-header :nav="navList" :user="User" @out="exitOut"></y-header>
    <div class="container">
      <router-view />
      <BackTop :bottom="170"></BackTop>
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
    this.getResource()
    this.getCompany()
  },
  computed: {
    ...mapGetters([
      'User',
      'navList',
      'title',
      'iconList',
      'footerList'
    ])
  },
  methods: {
    ...mapActions([
      'getResource',
      'getCompany',
      'exit',
      'login'
    ]),
    exitOut () {
      this.exit()
      sessionStorage.removeItem('User')
    }
  },
  created () {
    let user = JSON.parse(sessionStorage.getItem('User'))
    if (user) {
      this.login(user)
    }
  }
}

</script>

<style lang="scss" scoped>
.index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.container {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px;
  min-width: 1180px;
  min-height: 77vh;
  max-width: 1180px;
}

</style>

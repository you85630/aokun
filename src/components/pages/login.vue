<template>
  <div class="learn">
    <bg-color>
      <y-search></y-search>
    </bg-color>

    <bg-color :header="header1" v-if="!User.name">
      <login-box @on-login="logIn"></login-box>
    </bg-color>

    <bg-color :header="header2">
      <about-box :video="videoBox" :list="aboutBox"></about-box>
    </bg-color>
  </div>
</template>

<script>
import loginBox from 'components/modules/login'
import aboutBox from 'components/modules/about-me'

import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      header1: '翱坤数据库',
      header2: '什么是翱坤数据库？'
    }
  },
  components: {
    loginBox,
    aboutBox
  },
  computed: {
    ...mapGetters([
      'videoBox',
      'aboutBox',
      'User',
      'Message'
    ])
  },
  methods: {
    ...mapActions([
      'login',
      'getStudy',
      'searchData'
    ]),
    logIn (key) {
      if (key.tel === '') {
        this.$Message.error('手机号码不能为空')
      } if (key.pwd === '') {
        this.$Message.error('密码不能为空')
      } else {
        this.login(key)
        if (this.Message.status) {
          this.$Message.success('登录成功')
          sessionStorage.setItem('remember', JSON.stringify(key))
          this.show = false
          this.$nextTick(function () {
            this.show = true
          })
        } else {
          this.$Message.error(this.Message.msg)
        }
      }
    }
  },
  created () {
    this.getStudy()
  }
}
</script>

<style lang="scss" scoped>
</style>

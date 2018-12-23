<template>
  <div class="learn">
    <bg-color>
      <y-search></y-search>
    </bg-color>

    <bg-color :header="header1">
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
      header1: '登录/注册翱坤数据库',
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
      'loginMessage'
    ])
  },
  methods: {
    ...mapActions([
      'login',
      'loginInfo',
      'getStudy',
      'searchData',
      'getVideoBox'
    ]),
    logIn (key) {
      if (key.tel === '') {
        this.$Message.error('手机号码不能为空')
      } if (key.pwd === '') {
        this.$Message.error('密码不能为空')
      } else {
        this.login(key)
        setTimeout(() => {
          if (this.loginMessage.detail) {
            this.$Message.success('登录成功')
            if (key.select) {
              localStorage.setItem('AOKUN-REMEMBER', JSON.stringify(key))
            } else {
              localStorage.removeItem('AOKUN-REMEMBER')
            }
          } else {
            this.$Message.error(this.loginMessage.result)
          }
        }, 200)
      }
    }
  },
  created () {
    this.getStudy()
    this.getVideoBox()
    this.loginInfo()
  }
}
</script>

<style lang="scss" scoped>
</style>

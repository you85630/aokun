<template>
  <div class="index">
    <y-header :nav="navList" :user="User" @out="exitOut"></y-header>
    <div class="container">
      <router-view />
      <BackTop :bottom="170"></BackTop>
    </div>
    <y-footer :title="Footer.title" :footer="Footer.list"></y-footer>
  </div>
</template>

<script>
import yHeader from 'components/common/header'
import yFooter from 'components/common/footer'
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      navList: [
        {
          id: '',
          name: ' 首页',
          link: '/home'
        }, {
          id: '',
          name: '搜索',
          link: '/search'
        }, {
          id: '',
          name: '数据',
          link: '/data'
        }, {
          id: '',
          name: '学习',
          link: '/learn'
        }, {
          id: '',
          name: '帮助',
          link: '/help'
        }
      ]
    }
  },
  components: {
    yHeader,
    yFooter
  },
  mounted () {
    this.getFooter()
    this.getCompany()
    this.getResource()
  },
  computed: {
    ...mapGetters([
      'User',
      'Footer'
    ])
  },
  methods: {
    ...mapActions([
      'getResource',
      'getCompany',
      'getFooter',
      'exit',
      'login'
    ]),
    exitOut () {
      this.exit()
      this.VueCookie.delete('AOKUN-USER')
    }
  },
  created () {
    let user = JSON.parse(this.VueCookie.get('AOKUN-USER'))
    if (user) {
      this.login(user)
    }
  }
}

</script>

<style lang="scss" scoped>
.index {
  width: 100%;
}

.container {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 77vh;
  width: 1180px;
}

</style>

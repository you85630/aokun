<template>
  <div class="header">
    <div class="left">
      <div class="logo">翱坤数据库</div>
      <div class="nav">
        <router-link v-for="(li,index) in nav" :key="index" :to="li.link"><p @click="linkTo">{{li.name}}</p></router-link>
      </div>
    </div>
    <div class="right" v-if="user.name">
      <p>{{user.name}}</p>
      <p class="gap">|</p>
      <p @click="exit">退出</p>
    </div>
    <div class="right" v-else @click="login"><Icon type="ios-contact" />登录</div>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Array, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null
    },
    user: {
      type: Object
    }
  },
  methods: {
    exit () {
      this.$emit('out')
    },
    login () {
      this.$emit('go')
    },
    linkTo () {
      let list = this.$store.state.home.linklist
      for (let i = 0; i < list.length; i++) {
        const element = list[i].item
        for (const key in element) {
          if (element.hasOwnProperty(key)) {
            const e = element[key]
            e.type = false
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 50px;
  width: 1180px;
  height: 70px;
  background-color:#051520;
}
.left{
  display: flex;
  align-items: center;
  .logo{
    margin-right: 48px;
    color: #fff;
    font-size: 24px;
  }
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    a{
      color: #fff;
      font-size: 18px;
      opacity: .5;
    }
    .router-link-exact-active,
    .router-link-active{
      font-weight: bold;
      opacity: 1;
    }
  }
}
.right{
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  i {
    margin-right: 6px;
    color: #fff;
    font-size: 22px;
  }
  .gap{
    margin: 0 10px;
  }
}
</style>

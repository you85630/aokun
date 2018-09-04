<template>
  <div class="sub-nav">
    <router-link class="nav" v-for="(li,index) in list" :key="index" :to="li.link">
      <div class="icon">
        <img :src="li.icon" alt="">
      </div>
      <div class="name">{{li.name}}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-nav{
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  background-color: #fff;
}
.nav{
  width: 20%;
  text-align: center;
  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    border: 2px solid #9B9B9B;
    border-radius: 100%;
    img{
      width: 80%;
      height: 80%;
    }
  }
  .name{
    padding-top: 16px;
    color: #9B9B9B;
    font-size: 18px;
  }
}
</style>

<template>
  <div class="sub-nav">
    <div class="nav" v-for="(li,index) in list" :key="index" @click="linkTo(li.link)">
      <div class="icon">
        <img :src="li.icon" alt="">
      </div>
      <div class="name">{{li.name}}</div>
    </div>
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
  },
  methods: {
    linkTo (key) {
      if (key) {
        window.open(key, '_blank')
      } else {
        this.$router.push('/home')
      }
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
  cursor: pointer;
  .icon{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 90px;
    height: 90px;
    border: 1px solid rgba($color: #000000, $alpha: .4);
    border-radius: 100%;
    img{
      width: 90%;
      height: 90%;
      border-radius: 100%;
    }
  }
  .name{
    padding-top: 10px;
    color: #051520;
    font-size: 14px;
  }
}
</style>

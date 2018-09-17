<template>
  <div class="carousel">
    <div class="header">翱坤知识库</div>
    <div class="slide-box">
      <div class="img-box">
        <router-link v-for="(li,index) in list" :key="index" :to="li.link" v-if="index+1===num">
          <img :src="li.img" alt="">
          <div class="info">{{li.info}}</div>
        </router-link>
      </div>
      <div class="btn-box">
        <div class="btn"><p v-for="(li,index) in list.length" :key="index" :class="{active:index+1===num}" @click="now(li)"></p></div>
      </div>
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
  data () {
    return {
      num: 0
    }
  },
  methods: {
    next () {
      let len = this.list.length
      let Inx = this.num
      if (Inx === len) {
        this.num = 1
      } else {
        this.num++
      }
      setTimeout(() => {
        this.next()
      }, 5000)
    },
    now (key) {
      this.num = key
      clearTimeout()
    }
  },
  created () {
    this.next()
  }
}
</script>

<style lang="scss" scoped>
.carousel{
  width: 100%;
}
.slide-box{
  position: relative;
  padding: 0 10px;
  .img-box{
    a{
      display: flex;
      align-items: center;
      justify-content: space-between;
      img{
        width: 550px;
        height: 309px;
      }
      .info{
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 20px;
        width: 510px;
        height: 309px;
        background-color: #f9f9f9;
        font-size: 24px;
      }
    }
  }
  .btn-box{
    text-align: center;
    .btn{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      p{
        margin: 0 25px;
        width: 30px;
        height: 5px;
        background-color: #ccc;
        cursor: pointer;
      }
      .active{
        background-color: #051520;
      }
    }
  }
}
</style>

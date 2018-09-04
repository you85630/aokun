<template>
  <div class="carousel">
    <div class="header">{{header}}</div>
    <div class="slide-box">
      <div class="img-box">
        <router-link v-for="(li,index) in list" :key="index" :to="li.link" v-if="index+1===num">
          <img :src="li.img" alt="">
          <div class="info">{{li.info}}</div>
        </router-link>
      </div>
      <div class="btn-box">
        <Icon class="icon" type="md-arrow-dropleft-circle" @click="prev" />
        <div class="btn"><p v-for="(li,index) in list.length" :key="index" :class="{active:index+1===num}" @click="now(li)"></p></div>
        <Icon class="icon" type="md-arrow-dropright-circle" @click="next" />
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
    },
    header: {
      type: String,
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
    prev () {
      let len = this.list.length
      let Inx = this.num

      if (Inx === 1) {
        this.num = len
      } else {
        this.num--
      }
    },
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
.header{
  padding: 20px 10px;
  color: #ffffff;
  font-size: 24px;
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
        background-color: #b0c1da;
        color: #fff;
        font-size: 24px;
      }
    }
  }
  .btn-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon{
      color: #fff;
      font-size: 36px;
      cursor: pointer;
    }
    .btn{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 0;
      p{
        margin: 0 25px;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        background-color: #fff;
        cursor: pointer;
      }
      .active{
        opacity: .5;
      }
    }
  }
}
</style>

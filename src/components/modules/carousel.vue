<template>
  <div class="carousel">
    <div class="header">翱坤数据库</div>
    <Carousel loop autoplay v-model="num" dots="outside" arrow="hover" trigger="click">
      <CarouselItem v-for="(li,index) in list" :key="index">
        <div class="img-box">
          <img :src="li.img" alt="">
          <div class="info">{{li.info}}</div>
        </div>
      </CarouselItem>
    </Carousel>
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
  }
}
</script>

<style lang="scss" scoped>
.carousel{
  width: 100%;
  .img-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 309px;
    img{
      width: 550px;
      height: 100%;
    }
    .info{
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 20px;
      width: 510px;
      height: 100%;
      background-color: #f9f9f9;
      font-size: 18px;
    }
  }
}
</style>

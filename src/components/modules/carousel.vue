<template>
  <div class="carousel">
    <Carousel loop autoplay v-model="num" :autoplaySpeed="5000" dots="outside" arrow="hover" trigger="click">
      <CarouselItem v-for="(li,index) in list" :key="index">
        <div class="img-box">
          <img :src="li.img" alt="">
          <div class="info" v-html="li.info"></div>
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
    margin-bottom: 10px;
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
      font-size: 14px;
      a{
        color: #515a6e;
      }
    }
  }
}
</style>

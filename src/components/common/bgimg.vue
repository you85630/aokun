<template>
  <div class="bgimg" :style="bgimg">
    <div class="bgcolor">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null
    }
  },
  computed: {
    bgimg: function () {
      let bgimg = {
        backgroundImage: 'url(' + this.img + ')'
      }
      return bgimg
    }
  }
}
</script>

<style lang="scss" scoped>
.bgimg{
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
.bgcolor{
  width: 100%;
  height: 100%;
  background-color:rgba(74,144,226,0.6);
}
</style>

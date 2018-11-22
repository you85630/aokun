<template>
  <div class="y-box">
    <div class="header-box" v-if="header">{{header}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String // String, Number, Boolean, Function, Object, Array
    }
  }
}
</script>

<style lang="scss" scoped>
.y-box{
  box-sizing: border-box;
  margin-bottom: 16px;
  padding: 16px;
  width: 100%;
  border-radius: 4px;
  transition: all .2s ease-in-out;
  background-color: #fff;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
  .header-box{
    margin: 0 -16px 16px -16px;
    padding: 4px 0 4px 16px;
    background-color: #2d8cf0;
    color: #fff;
    font-size: 18px;
  }
}
</style>

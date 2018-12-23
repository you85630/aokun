<template>
  <div class="introduce-page-box">
    <div class="introduce-left" v-html="msg"></div>
    <div class="introduce-right">
      <router-link to="/learn">了解关于翱坤数据库的更多信息</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<style lang="scss">
.introduce-page-box{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  .introduce-left{
    width: 74%;
    font-size: 14px;
    p{
      margin-top: 10px;
    }
    ul{
      margin: 20px 0;
      padding-left: 30px;
      li{
        margin-top: 10px;
        list-style: disc;
      }
    }
  }
  .introduce-right{
    a{
      padding: 10px 20px;
      border: none;
      background-color: #fff;
      font-size: 14px;
    }
  }
}
</style>

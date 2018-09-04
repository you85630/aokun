<template>
  <div class="item">
    <div class="left">
      <p>{{item.info}}</p>
      <p><router-link :to="item.link">{{item.name}}</router-link></p>
    </div>
    <div class="right">
      <img :src="item.cover" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
.item{
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  .left{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    box-sizing: border-box;
    padding: 60px 20px;
    width: 460px;
    height: 265px;
    background-color: #fff;
    p{
      font-size: 14px;
    }
    a{
      padding: 10px 20px;
      border: none;
      border: 1px solid #316EC3;
      background-color: #fff;
      color: #316EC3;
      font-size: 14px;
    }
  }
  .right{
    width: 680px;
    height: 265px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<template>
  <bg-color>
    <div class="item">
      <div class="left">
        <div class="info" v-html="item.desc"></div>
        <p><Button size="large" style="width:80px" type="primary" @click="linkTo(item)">{{item.title}}</Button></p>
      </div>
      <div class="right">
        <img :src="item.pic" alt="">
      </div>
    </div>
  </bg-color>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    linkTo (key) {
      let router = this.$router

      let home = {
        oragons: key.url,
        name: key.url.toUpperCase()
      }
      this.VueCookie.set('AOKUN-HOME', JSON.stringify(home))
      router.push({name: 'search'})
    }
  }
}
</script>

<style lang="scss" scoped>
.item{
  display: flex;
  align-items: center;
  flex-direction: row;
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
    .info{
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

<template>
  <div class="index-search">
    <div class="slogan">{{searchkey.slogan}}</div>
    <div class="box">
      <div class="publish">超过{{searchkey.num}}的出版物</div>
      <div class="search-box">
        <div class="search">
          <Icon class="icon" type="ios-search" />
          <input type="text" v-model="key" placeholder="输入关键字，作者，产品代码…">
        </div>
        <div class="btn" @click="search(key)">Search</div>
      </div>
      <div class="inspect"><router-link to="/learn">检查我的权限</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchkey: {
      type: Object, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null
    }
  },
  data () {
    return {
      key: ''
    }
  },
  methods: {
    search (key) {
      this.$emit('on-search', key)
    }
  }
}
</script>

<style lang="scss" scoped>
.index-search{
  position: relative;
  box-sizing: border-box;
  padding: 60px 40px;
  width: 100%;
  .slogan{
    color: #fff;
    font-size: 48px;
  }
  .box{
    padding: 0 80px;
    .publish{
      padding-top: 50px;
      color: #fff;
      font-size: 24px;
    }
    .search-box{
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 20px 0;
      .search{
        position: relative;
        .icon{
          position: absolute;
          top: 10px;
          left: 10px;
          color: #999;
          font-size: 30px;
        }
        input{
          box-sizing: border-box;
          padding: 12px;
          padding-left: 50px;
          width: 750px;
          border: none;
          border-radius: 2px;
          background-color: #fff;
          font-size: 18px;
        }
      }
      .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 51px;
        border-radius: 2px;
        background-color:#fff;
        color: #08151F;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .inspect{
    text-align: right;
    a{
      color: #fff;
      font-size: 24px;
    }
  }
}
</style>

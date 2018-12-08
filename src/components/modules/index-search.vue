<template>
  <div class="index-search">
    <div class="slogan">{{searchkey.slogan}}</div>
    <div class="search-now">
      <div class="publish">{{searchkey.num}}</div>
      <div class="search-box">
        <div class="search">
          <Icon class="icon" type="ios-search-outline" />
          <input type="text" v-model="key" placeholder="输入 适航规章 咨询通告 管理程序">
        </div>
        <div class="btn" @click="search(key)">搜索</div>
      </div>
      <div class="inspect"><router-link to="/login">检查我的权限</router-link></div>
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
      start: false,
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
  min-height: 405px;
  box-sizing: border-box;
  .slogan{
    color: #fff;
    font-size: 48px;
    margin-bottom: 50px;
  }
  .search-now{
    padding: 0 80px;
    .publish{
      color: #fff;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .search-box{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .search{
        position: relative;
        width: 100%;
        .icon{
          position: absolute;
          top: 10px;
          left: 12px;
          color: #999;
          font-size: 30px;
        }
        input{
          box-sizing: border-box;
          padding: 12px;
          padding-left: 50px;
          width: 100%;
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
        margin-left: 20px;
        width: 150px;
        height: 51px;
        border-radius: 2px;
        background-color:#2d8cf0;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .inspect{
    width: 100%;
    text-align: right;
    margin-top: 20px;
    a{
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>

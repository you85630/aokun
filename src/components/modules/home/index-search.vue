<template>
  <div class="index-search">
    <div class="slogan">{{searchkey.slogan}}</div>
    <div class="box">
      <div class="publish">超过{{searchkey.num}}的出版物</div>
      <div class="search-box">
        <div class="search">
          <Icon class="icon" type="ios-search" />
          <input type="text" v-model="searchkey.nowkey" placeholder="输入关键字，作者，产品代码…">
        </div>
        <div class="btn" @click="search(searchkey.nowkey)">Search</div>
      </div>
    </div>
    <div class="inspect"><router-link to="">检查我的访问</router-link></div>
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
  methods: {
    search (key) {
      this.$emit('search', key)
    }
  }
}
</script>

<style lang="scss" scoped>
.index-search{
  .slogan{
    box-sizing: border-box;
    padding: 30px 40px;
    color: #fff;
    font-size: 48px;
  }
  .box{
    padding: 0 80px;
    padding-top: 20px;
    .publish{
      padding-bottom: 20px;
      color: #fff;
      font-size: 24px;
    }
    .search-box{
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
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
        background-color:#F5F5F5;
        color: #08151F;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
  .inspect{
    padding: 20px 40px;
    padding-bottom: 40px;
    text-align: right;
    a{
      color: #fff;
      font-size: 24px;
    }
  }
}
</style>

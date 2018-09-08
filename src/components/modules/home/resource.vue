<template>
  <div class="resource">
    <div class="header">浏览翱坤数据库资源</div>
    <div class="box">
      <div class="list" v-for="(li,index) in list" :key="index">
        <div class="name">{{li.name}}</div>
        <router-link class="item" v-for="(i,val) in li.item" :key="val" :to="'/search/'+i.id">{{i.name}}</router-link>
      </div>
    </div>
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
  }
}
</script>

<style lang="scss" scoped>
.resource{
  font-size: 12px;
}
.header{
  margin-top: -20px;
  padding-bottom: 20px;
  color: #fff;
  font-size: 24px;
}
.box{
  display: flex;
  background-color: #fff;
  text-align: center;
  .list{
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
    &:first-child{
      .name{
        border-left: none;
      }
    }
    .name{
      margin-bottom: 8px;
      padding: 6px 0;
      border-bottom: 1px solid #b0c1da;
      border-left: 1px solid #b0c1da;
      color: #92B0D6;
      font-size: 18px;
    }
    .item{
      padding-bottom: 8px;
      color: #92B0D6;
      font-size: 16px;
    }
  }
}
</style>

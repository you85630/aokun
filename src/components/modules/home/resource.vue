<template>
  <div class="resource">
    <div class="header">浏览翱坤数据库资源</div>
    <div class="box">
      <div class="list" v-for="(li,index) in list" :key="index">
        <div class="name">{{li.name}}</div>
        <div class="item" v-for="(i,val) in li.item" :key="val" @click="linkTo(i)">{{i.name}}</div>
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
  },
  methods: {
    linkTo (key) {
      let router = this.$router
      router.push({name: 'search', query: {categry: key.id}})
    }
  }
}
</script>

<style lang="scss" scoped>
.resource{
  font-size: 12px;
}
.box{
  display: flex;
  text-align: center;
  .list{
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align: center;
    .name{
      margin-bottom: 8px;
      padding: 6px 0;
      border-bottom: 1px solid #ccc;
      color: #051520;
      font-weight: bold;
      font-size: 18px;
    }
    .item{
      padding-bottom: 8px;
      color: #051520;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>

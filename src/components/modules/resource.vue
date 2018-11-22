<template>
  <div class="resource">
    <div class="box">
      <div class="list" v-for="(li,index) in list" :key="index">
        <div class="name">{{li.name}}</div>
        <div class="item" v-for="(i,val) in li.item" :key="val" @click="linkTo(li,i)">{{i.name}}</div>
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
    linkTo (item, key) {
      let router = this.$router
      let home = {
        categry: key.id,
        classify: item.id,
        name: item.name
      }
      sessionStorage.setItem('home', JSON.stringify(home))
      router.push({name: 'search'})
    }
  }
}
</script>

<style lang="scss" scoped>
.resource{
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
        font-weight: bold;
        font-size: 14px;
      }
      .item{
        padding-bottom: 8px;
        font-size: 14px;
        cursor: pointer;
        &:hover{
          color: #2d8cf0;
        }
      }
    }
  }
}
</style>

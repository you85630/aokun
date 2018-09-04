<template>
  <div class="item-box">
    <ul>
      <li v-for="(li,index) in item.list" :key="index" :class="{all:index<2}" @click="linkTo(li)">
        <span>{{li.name}}：</span>
        <p>{{li.info}}</p>
      </li>
    </ul>
    <div class="content">{{item.content}}</div>
  </div>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    linkTo (key) {}
  }
}
</script>

<style lang="scss" scoped>
.item-box{
  box-sizing: border-box;
  padding: 10px 0;
  width: 100%;
  border-top: 1px solid #eee;
  ul{
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    li{
      display: flex;
      align-items: center;
      flex-direction: row;
      box-sizing: border-box;
      margin-bottom: 6px;
      width: 50%;
      &:nth-child(6),
      &:nth-child(4){
        padding-left: 10px;
      }
      span{
        text-align: right;
        white-space: nowrap;
        font-weight: bold;
        font-size: 14px;
      }
      p{
        font-size: 14px;
      }
    }
    .all{
      width: 100%;
    }
  }
  .content{
    font-size: 14px;
  }
}
</style>

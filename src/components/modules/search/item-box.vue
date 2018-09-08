<template>
  <div class="item-box">
    <ul>
      <li>
        <span>名称：</span>
        <p><router-link :to="'/search/details/'+item.key">{{item.name}}</router-link></p>
      </li>
      <li>
        <span>文号：</span>
        <p>{{item.number}}</p>
      </li>
      <li>
        <span>发文时间：</span>
        <p>{{item.time}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
.item-box{
  box-sizing: border-box;
  padding: 10px 0;
  width: 100%;
  border-top: 1px solid #eee;
  ul{
    li{
      display: flex;
      align-items: center;
      flex-direction: row;
      box-sizing: border-box;
      margin-bottom: 6px;
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
  }
}
</style>

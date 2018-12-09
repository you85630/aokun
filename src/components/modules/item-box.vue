<template>
  <div class="item">
    <ul>
      <li>
        <span>名称：</span>
        <p class="title" @click="linkTo(item)">{{item.title}}</p>
      </li>
      <li>
        <span>文号：</span>
        <p>{{item.wenhao?item.wenhao:'暂无'}}</p>
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
  props: ['item'],
  methods: {
    linkTo (item) {
      this.VueCookie.delete('AOKUN-ITEM')
      let router = this.$router
      router.push('/search/details')
      this.VueCookie.set('AOKUN-ITEM', JSON.stringify(item))
    }
  }
}
</script>

<style lang="scss" scoped>
.item{
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
      .title{
        color: #2d8cf0;
        cursor: pointer;
      }
    }
  }
}
</style>

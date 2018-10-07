<template>
  <div class="book-list">
    <div class="title">适航知识</div>
    <div class="list">
      <ul>
        <li v-for="(li,index) in list" :key="index">
          <p>{{li.name}}</p>
          <router-link :to="li.link">Learn More</router-link>
        </li>
      </ul>
    </div>
    <div class="title">安全性知识</div>
    <div class="list">
      <ul>
        <li v-for="(li,index) in list" :key="index">
          <p>{{li.name}}</p>
          <router-link :to="li.link">Learn More</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          name: '111',
          link: ''
        }, {
          name: '111',
          link: ''
        }, {
          name: '111',
          link: ''
        }, {
          name: '111',
          link: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.book-list{
  .title{
    font-size: 24px;
  }
  .list{
    margin-bottom: 30px;
    &:last-child{
      margin-bottom: 0;
    }
    ul{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 20px;
      li{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 260px;
        height: 360px;
        background-color: #f5f5f5;
        p{
          font-size: 18px;
        }
        a{
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          border: none;
          border-radius: 2px;
          background-color: #2d8cf0;
          color: #fff;
          font-size: 14px;
        }
      }
    }
  }
}
</style>

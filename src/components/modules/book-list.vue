<template>
  <div class="book-list">
    <div class="title">适航知识</div>
    <div class="list">
      <ul>
        <li v-for="(li,index) in list" :key="index">
          <p>{{li.name}}</p>
          <router-link :to="li.link">
            <Button type="primary">Learn More</Button>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="title">安全性知识</div>
    <div class="list">
      <ul>
        <li v-for="(li,index) in list" :key="index">
          <p>{{li.name}}</p>
          <router-link :to="li.link">
            <Button type="primary">Learn More</Button>
          </router-link>
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
    font-size: 16px;
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
        justify-content: space-around;
        width: 210px;
        height: 285px;
        background-color: #f5f5f5;
        p{
          font-size: 14px;
        }
      }
    }
  }
}
</style>

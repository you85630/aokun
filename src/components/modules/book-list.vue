<template>
  <div class="book-list">
    <div class="book-item" v-for="(li,index) in list" :key="index">
      <div class="title">{{li.title}}</div>
      <div class="list">
        <ul>
          <li v-for="(i,index) in li.list" :key="index">
            <p>{{i.title}}</p>
              <Button type="primary" @click="linkTo(i)">Learn More</Button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    linkTo (key) {
      this.$router.push({path: '/learn/news', query: {id: key.id}})
    }
  }
}
</script>

<style lang="scss" scoped>
.book-list{
  .title{
    font-size: 16px;
  }
  .book-item{
    margin-bottom: 30px;
    &:last-child{
      margin-bottom: 0;
    }
    ul{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 10px;
      li{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;
        margin-right: 89px;
        width: 210px;
        height: 285px;
        background-color: #f5f5f5;
        &:nth-child(4n){
          margin-right: 0;
        }
        p{
          font-size: 14px;
        }
      }
    }
  }
}
</style>

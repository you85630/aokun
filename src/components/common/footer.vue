<template>
  <div class="footer">
    <div class="main">
      <div class="slogan">{{title}}</div>
      <div class="middle">
        <router-link v-for="(li,index) in footer" :key="index" :to="li.link">{{li.name}}</router-link>
      </div>
      <div class="bottom">&copy;&nbsp;{{time}}翱坤数据库，版权所有</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'footer'],
  computed: {
    time: function () {
      let now = new Date().getFullYear()
      return now
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  box-sizing: border-box;
  width: 100%;
  background-color: #051520;
  .main{
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px;
    width: 1180px;
    background-color: #051520;
    .slogan{
      font-size: 18px;
    }
  }
}
.middle{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  width: 70%;
  a{
    color: #5f6a72;
    font-size: 14px;
  }
}
.bottom{
  color: #5f6a72;
  font-size: 14px;
}
</style>

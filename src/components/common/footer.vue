<template>
  <div class="footer">
    <div class="main">
      <div class="slogan-box">
        <div class="slogan">{{title}}</div>
        <div class="middle">
          <a :href="li.link" target="_blank" v-for="(li,index) in footer" :key="index"><img :src="li.icon" alt=""></a>
        </div>
      </div>
      <div class="bottom">&copy;&nbsp;{{time}}上海翱坤，版权所有</div>
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
  }
}
.slogan-box{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .slogan{
    font-size: 18px;
  }
  .middle{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 20px 0;
    width: 70%;
    a{
      margin-left: 20px;
      img{
        width: 24px;
        height: 24px;
      }
    }
  }
}
.bottom{
  color: #5f6a72;
  font-size: 14px;
}
</style>

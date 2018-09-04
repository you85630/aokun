<template>
  <div class="footer">
    <div class="top">
      <div class="slogan">{{title}}</div>
      <div class="iconList"><Icon class="icon" v-for="(li,index) in icon" :key="index" :type="li" /></div>
    </div>
    <div class="middle">
      <router-link v-for="(li,index) in footer" :key="index" :to="li.link">{{li.name}}</router-link>
    </div>
    <div class="bottom">&copy;{{time}}翱坤数据库，版权所有</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: null
    },
    icon: {
      type: Array, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: null
    },
    footer: {
      type: Array,
      required: true,
      default: null
    }
  },
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
  margin: 0 auto;
  padding: 20px 40px;
  width: 1180px;
  background-color: #f5f5f5;
  color: #666;
  font-size: 12px;
}
.top{
  display: flex;
  align-items: center;
  justify-content: space-between;
  .slogan{
    font-size: 18px;
  }
  .icon{
    margin-left: 20px;
    font-size: 24px;
  }
}
.middle{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  width: 70%;
  a{
    color: #666;
    font-size: 14px;
  }
}
.bottom{
  font-size: 14px;
}
</style>

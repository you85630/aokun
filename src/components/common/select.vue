<template>
  <div class="select-box">
    <div class="iconbox" @click="showBox">
      <p>{{value}}</p>
      <div class="icon">
        <Icon type="md-arrow-dropup" />
        <Icon type="md-arrow-dropdown" />
      </div>
    </div>
    <ul v-if="show" @mouseleave="hideBox">
      <li v-for="(li,index) in select.list" :key="index" @click="activeSelect(li)">{{li.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['value', 'select'],
  data () {
    return {
      show: false
    }
  },
  methods: {
    showBox () {
      this.show = true
    },
    hideBox () {
      this.show = false
    },
    activeSelect (key) {
      this.show = false
      this.select.active = key.name
      this.$emit('input', key.name)
      this.$emit('on-click', key)
    }
  }
}
</script>

<style lang="scss" scoped>
.select-box{
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0 10px;
  padding: 0 10px;
  width: 100%;
  height: 100%;
  border: 1px solid #eee;
  border-radius: 2px;
  background-color: #fff;
  .iconbox{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    p{
      margin-right: 10px;
      width: 90%;
    }
    .icon{
      display: flex;
      flex-direction: column;
      justify-content: center;
      i{
        margin: -4px 0;
        font-size: 14px;
      }
    }
  }
  ul{
    position: absolute;
    top:27px;
    left: 0;
    z-index: 2;
    width: 100%;
    background-color: #fff;
    cursor: pointer;
    li{
      box-sizing: border-box;
      padding: 4px 10px;
      width: 100%;
      &:hover{
        background-color: #f5f5f5;
      }
    }
  }
}
</style>

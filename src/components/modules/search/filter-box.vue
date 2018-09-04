<template>
  <div class="filter-box">
    <div class="small" @click="hideBox=!hideBox">
      <span>
        <Icon  :type="hideBox?'ios-remove':'ios-add'" />
        <em v-if="hideBox">收起过滤器</em>
        <em v-else>展开过滤器</em>
      </span>
    </div>
    <div class="filter" v-if="hideBox">
      <div class="btn">
        <button @click="filter">应用</button>
        <button class="save" @click="refresh">重置</button>
      </div>
      <div class="show">
        <div class="show-title">
          <h2>只显示</h2>
          <ul>
            <li v-for="(li,index) in showTitle" :key="index" :class="{active:li.type}" @click="selectTitle(li)">
              <Icon :type="li.type?'ios-checkbox':'ios-square-outline'" />
              <p>{{li.name}}</p>
            </li>
          </ul>
        </div>
        <div class="show-box">
          <h2>过滤器</h2>
          <dl v-for="(li,index) in showBox" :key="index">
            <dt @click="li.type=!li.type">
              <p>{{li.name}}</p>
              <Icon :type="li.type?'ios-add':'ios-remove'" />
            </dt>
            <dd v-for="(i,val) in li.box" :key="val" :class="{active:i.type}" v-if="!li.type" @click="selectBox(i)">
              <Icon :type="i.type?'ios-checkbox':'ios-square-outline'" />
              <p>{{i.name}}</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="btn">
        <button @click="filter">应用</button>
        <button class="save" @click="refresh">重置</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showTitle', 'showBox'],
  data () {
    return {
      hideBox: true,
      select: {
        title: [],
        box: []
      }
    }
  },
  methods: {
    selectTitle (key) {
      key.type = !key.type
      if (key.type) {
        this.select.title.push(key)
      }
      let now = this.select.title
      for (let i = 0; i < now.length; i++) {
        const element = now[i].type
        if (!element) {
          this.select.title.splice(i, 1)
        }
      }
    },
    selectBox (key) {
      key.type = !key.type
      if (key.type) {
        this.select.box.push(key)
      }
      let now = this.select.box
      for (let i = 0; i < now.length; i++) {
        const element = now[i].type
        if (!element) {
          this.select.box.splice(i, 1)
        }
      }
    },
    // 应用
    filter () {
      this.$emit('on-click', this.select)
    },
    // 重置
    refresh () {
      let titleList = this.showTitle
      let boxList = this.showBox
      for (const key in titleList) {
        if (titleList.hasOwnProperty(key)) {
          titleList[key].type = false
        }
      }
      for (let i = 0; i < boxList.length; i++) {
        const element = boxList[i].box
        for (const key in element) {
          if (element.hasOwnProperty(key)) {
            element[key].type = false
          }
        }
      }
      this.select = {
        title: [],
        box: []
      }
      this.$emit('on-click', this.select)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-box{
  box-sizing: border-box;
  width: 300px;
  h2{
    margin-top: 20px;
    font-size: 16px;
  }
  .active{
    color:#316EC3;
  }
  .small{
    padding: 10px 20px;
    background-color: #f5f5f5;
    text-align: right;
    font-size: 14px;

    user-select: none;
    span{
      cursor: pointer;
      i{
        font-size: 20px;
      }
    }
  }
  .filter{
    padding: 0 20px;
    padding-bottom: 20px;
    background-color: #f5f5f5;
    .show{
      overflow-y: auto;
      max-height: 500px;
    }
  }
  .btn{
    button{
      margin-right: 6px;
      padding: 4px 10px;
      border: 1px solid #316EC3;
      border-radius: 2px;
      background-color: #316EC3;
      color: #fff;
      font-size: 14px;
    }
    .save{
      margin-right: 0;
      border-color: #316EC3;
      background-color: #f5f5f5;
      color: #316EC3;
    }
  }
}
.show-title{
  ul{
    padding-left: 10px;
    li{
      display: flex;
      align-items: center;
      flex-direction: row;
      margin: 4px 0;
      cursor: pointer;

      user-select: none;
      i{
        font-size: 16px;
      }
      p{
        margin-left: 4px;
        font-size: 14px;
      }
    }
  }
}
.show-box{
  dl{
    padding-left: 10px;

    user-select: none;
    dt{
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      margin: 4px 0;
      cursor: pointer;
      i{
        font-size: 20px;
      }
      p{
        margin-right: 4px;
        font-size: 14px;
      }
    }
    dd{
      display: flex;
      align-items: center;
      flex-direction: row;
      margin: 4px 0;
      padding-left: 10px;
      cursor: pointer;
      i{
        font-size: 16px;
      }
      p{
        margin-left: 4px;
        font-size: 14px;
      }
    }
  }
}
</style>

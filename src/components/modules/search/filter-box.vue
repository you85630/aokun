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
      <div class="show">
        <div class="show-box">
          <dl v-for="(li,index) in showBoxNow" :key="index">
            <dt @click="li.type=!li.type">
              <p>{{li.name}}</p>
              <Icon :type="li.type?'ios-add':'ios-remove'" />
            </dt>
            <dd v-for="(i,val) in li.item" :key="val" :class="{active:i.type}" v-if="!li.type" @click="selectBox(i)">
              <Icon :type="i.type?'md-radio-button-on':'md-radio-button-off'" />
              <p>{{i.name}}</p>
            </dd>
          </dl>
        </div>
      </div>
      <div class="btn">
        <button @click="filter">应用</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showBox'],
  data () {
    return {
      hideBox: true,
      select: ''
    }
  },
  computed: {
    showBoxNow: function (param) {
      let list = this.showBox
      let router = parseInt(this.$router.currentRoute.query.categry)
      for (const key in list) {
        if (list.hasOwnProperty(key)) {
          const element = list[key].item
          for (let i = 0; i < element.length; i++) {
            const e = element[i]
            if (e.id === router) {
              e.type = true
            }
          }
        }
      }

      return list
    }
  },
  methods: {
    selectBox (key) {
      let list = this.showBoxNow
      for (let i = 0; i < list.length; i++) {
        const element = list[i].item
        for (const e in element) {
          if (element.hasOwnProperty(e)) {
            element[e].type = false
          }
        }
      }
      key.type = !key.type
      this.select = key
    },
    // 应用
    filter () {
      if (this.select !== '') {
        this.$emit('on-click', this.select)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-box{
  box-sizing: border-box;
  width: 300px;
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
.show-box{
  padding: 10px 0;
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

<template>
  <div class="filter-box">
    <div class="filter" v-for="(li,index) in showBox" :key="index">
      <div class="filter-title" @click="li.type=!li.type">
        <p>{{li.title}}</p>
        <Icon :type="li.type?'md-arrow-dropright':'md-arrow-dropdown'"/>
      </div>
      <div class="filter-list" v-if="!li.type" style="width:100%;">
        <CheckboxGroup v-model="checkedNames[index]" @click="clickMe">
          <Checkbox v-for="(i, val) in li.label" :key="val" :label="i.id">
            {{i.name}}
            <span class="num" v-if="i.number">（{{i.number}}）</span>
          </Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['select', 'showBox'],
  data () {
    return {
      selectValue: this.select,
      checkedNames: {}
    }
  },
  watch: {
    checkedNames: {
      deep: true,
      handler: 'clickMe'
    }
  },
  methods: {
    selectBox (key) {
      let now = {}
      let list = this.showBox
      for (let i = 0; i < list.length; i++) {
        const element = list[i].label
        for (let j = 0; j < element.length; j++) {
          const e = element[j]
          if (e.name === key) {
            now = e
          }
        }
      }
      this.$emit('on-click', now)
    },
    clickMe () {
      var that = this
      this.$emit('on-click', that.checkedNames)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-box {
  box-sizing: border-box;
  margin-right: 30px;
  width: 300px;
  .filter {
    .filter-title {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      margin: 4px 0;
      padding: 4px 10px;
      border-radius: 2px;
      background-color: #2d8cf0;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      i {
        font-size: 20px;
      }
      p {
        margin-right: 4px;
        font-size: 14px;
      }
    }
    .filter-list {
      display: flex;
      overflow-y: auto;
      flex-direction: column;
      box-sizing: border-box;
      padding-left: 10px;
      max-height: 50vh;
      .num {
        color: #2d8cf0;
      }
    }
  }
}
.ivu-checkbox-group{
  width: 100%;
  box-sizing: border-box;
}
.ivu-checkbox-group-item{
  width: 100%;
  box-sizing: border-box;
  height: 30px;
  line-height: 30px;
  margin: 0;
}
</style>

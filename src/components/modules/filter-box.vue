<template>
  <div class="filter-box">
    <div class="show-box">
      <dl v-for="(li,index) in showBox" :key="index">
        <dt class="btn-bg" @click="li.type=!li.type">
          <p>{{li.title}}</p>
          <Icon :type="li.type?'md-arrow-dropright':'md-arrow-dropdown'" />
        </dt>
        <dd v-for="(i,val) in li.label" :key="val" :class="{active:i.type}" v-if="!li.type" @click="selectBox(i)">
          <Icon :type="i.type?'md-square':'md-square-outline'" />
          <p>{{i.name}}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showBox'],
  methods: {
    selectBox (key) {
      let list = this.showBox
      for (let i = 0; i < list.length; i++) {
        const element = list[i].label
        for (const e in element) {
          if (element.hasOwnProperty(e)) {
            element[e].type = false
          }
        }
      }
      key.type = !key.type
      this.$emit('on-click', key)
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-box{
  box-sizing: border-box;
  width: 300px;
  .active{
    color:#2d8cf0;
  }
}
.show-box{
  dl{
    &:first-child{
      dt{
        margin: 0;
      }
    }
    dt{
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      margin: 4px 0;
      padding: 4px 10px;
      font-weight: bold;
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
        font-size: 14px;
      }
      p{
        margin-left: 4px;
        font-size: 14px;
      }
    }
  }
}
</style>

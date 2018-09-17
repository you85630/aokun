<template>
  <div class="filter-box">
    <div class="show-box">
      <dl v-for="(li,index) in showBoxNow" :key="index">
        <dt class="btn-bg" @click="li.type=!li.type">
          <p>{{li.name}}</p>
          <Icon :type="li.type?'md-arrow-dropright':'md-arrow-dropdown'" />
        </dt>
        <dd v-for="(i,val) in li.item" :key="val" :class="{active:i.type}" v-if="!li.type" @click="selectBox(i)">
          <Icon :type="i.type?'md-radio-button-on':'md-radio-button-off'" />
          <p>{{i.name}}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showBox'],
  computed: {
    showBoxNow: function (param) {
      let list = this.showBox
      let router = parseInt(this.$router.currentRoute.query.categry)
      for (const key in list) {
        if (list.hasOwnProperty(key)) {
          const element = list[key].item
          for (let i = 0; i < element.length; i++) {
            const e = element[i]
            if (router) {
              e.type = false
              if (e.id === router) {
                e.type = true
              }
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
    color:#316EC3;
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

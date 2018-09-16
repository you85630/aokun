<template>
  <div class="search-box">
    <div class="box">
      <input :class="{all:more}" type="text" placeholder="输入关键字" v-model="key.key">
      <p class="in">in:</p>
      <div class="select">
        <div class="iconbox" @click="select=true">
          <p>{{key.select}}</p>
          <div class="icon">
            <Icon type="md-arrow-dropup" />
            <Icon type="md-arrow-dropdown" />
          </div>
        </div>
        <ul v-if="select" @mouseleave="select=false">
          <li v-for="(li,index) in rangeList" :key="index" @click="showSelect(li)">{{li.name}}</li>
        </ul>
      </div>
      <div class="more" v-if="!more">
        <button @click="simpleSearch(key)">搜索</button>
        <Icon class="help" type="ios-help-circle" />
        <p class="advanced" @click="more=true">高级搜索</p>
      </div>
      <div class="close" @click="more=false" v-else>关闭高级搜索</div>
    </div>

    <ul class="box box2"  v-if="more">
      <li>
        <p>办文单位：</p>
        <input type="text" v-model="key.unit">
      </li>
      <li>
        <p>文号：</p>
        <input type="text" v-model="key.number">
      </li>
      <li>
        <p>发文日期：</p>
        <div class="time" v-if="status">
          <date-picker v-model="key.stime"></date-picker>
          <span>至</span>
          <date-picker v-model="key.etime"></date-picker>
        </div>
      </li>
      <li>
        <p></p>
        <button @click="advancedSearch(key)">搜索</button>
      </li>
    </ul>
  </div>
</template>

<script>
import datePicker from 'components/common/datepicker'
export default {
  props: ['selectBox'],
  components: {
    datePicker
  },
  computed: {
    rangeList: function () {
      return this.selectBox
    }
  },
  data () {
    return {
      select: false,
      more: false,
      status: true,
      key: {
        categry: '',
        page: 1,
        key: '',
        select: '全部',
        selectid: '',
        unit: '',
        number: '',
        stime: '',
        etime: ''
      }
    }
  },
  methods: {
    showSelect (key) {
      this.select = false
      this.key.select = key.name
      this.key.selectid = key.id
    },
    simpleSearch (key) {
      this.$emit('on-search', key)
      this.key = {
        categry: '',
        page: 1,
        key: '',
        select: '全部',
        selectid: '',
        unit: '',
        number: '',
        stime: '',
        etime: ''
      }
    },
    advancedSearch (key) {
      this.$emit('on-search', key)
      this.more = true
      this.key = {
        categry: '',
        page: 1,
        key: '',
        select: '全部',
        selectid: '',
        unit: '',
        number: '',
        stime: '',
        etime: ''
      }
      this.status = false
      this.$nextTick(function () {
        this.status = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box{
  margin: -10px 0;
  font-size: 14px;
}
.box{
  display: flex;
  align-items: center;
  flex-direction: row;
  input{
    box-sizing: border-box;
    padding: 0 10px;
    width: 580px;
    height: 45px;
    border: none;
    background-color: #fff;
    font-size: 18px;
  }
  .all{
    width: 700px;
  }
  .in{
    margin: 0 10px 0 20px;
    font-size: 24px;
  }
  .close{
    margin-left: 20px;
    cursor: pointer;
  }
  .select{
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin: 0 10px;
    padding: 0 10px;
    width: 160px;
    height: 45px;
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
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .icon{
        display: flex;
        flex-direction: column;
        justify-content: center;
        i{
          margin: -4px 0;
          font-size: 18px;
        }
      }
    }
    ul{
      position: absolute;
      top:47px;
      left: 0;
      z-index: 2;
      width: 100%;
      background-color: #fff;
      max-height: 200px;
      overflow-y: auto;
      cursor: pointer;
      li{
        padding: 4px 10px;
        font-size: 14px;
        &:hover{
          background-color: #f5f5f5;
        }
      }
    }
  }
  .more{
    display: flex;
    align-items: center;
    margin-left: 20px;
    button{
      width: 116px;
      height: 45px;
      border: none;
      border-radius: 2px;
      background: #316EC3;
      color: #FFFFFF;
      font-size: 18px;
    }
    .advanced{
      margin-left: 20px;
      color: #316EC3;
      font-size: 18px;
      cursor: pointer;
    }
    .help{
      margin-left: 36px;
      color:#fff;
      font-size: 20px;
      cursor: pointer;
    }
  }
}
.box2{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  li{
    display: flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    margin-top: 20px;
    width: 50%;
    p{
      width: 90px;
      text-align: right;
    }
    input{
      width: 400px;
      height: 30px;
      font-size: 14px;
    }
    button{
      width: 80px;
      height: 30px;
      border: none;
      border-radius: 2px;
      background: #316EC3;
      color: #FFFFFF;
      font-size: 16px;
    }
  }
  .time{
    display: flex;
    flex-direction: row;
    align-items: center;
    span{
      color:#fff;
      margin: 0 10px;
    }
    .date-picker{
      background-color: #fff;
    }
  }
}
</style>

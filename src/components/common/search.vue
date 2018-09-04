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
        <button>搜索</button>
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
        <div class="time">
          至
        </div>
      </li>
      <li>
        <p></p>
        <button>搜索</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: false,
      more: false,
      key: {
        key: '',
        select: '全文',
        unit: '',
        number: '',
        stime: '',
        etime: ''
      },
      rangeList: [
        {
          name: '全文'
        },
        {
          name: '关联'
        }, {
          name: '最新'
        }
      ]
    }
  },
  methods: {
    showSelect (key) {
      this.select = false
      this.key.select = key.name
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
    width: 625px;
    height: 45px;
    border: none;
    border-radius: 2px;
    background-color: #fff;
    font-size: 18px;
  }
  .all{
    width: 752px;
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
    width: 104px;
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
    margin-top: 10px;
    width: 50%;
    p{
      width: 90px;
      text-align: right;
    }
    input{
      width: 400px;
    }
    button{
      width: 116px;
      height: 45px;
      border: none;
      border-radius: 2px;
      background: #316EC3;
      color: #FFFFFF;
      font-size: 18px;
    }
    .time{
      color:#fff;
    }
  }
}
</style>

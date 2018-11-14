<template>
  <div class="search-box">
    <div class="box">
      <input type="text" placeholder="输入关键字" v-model="key.text">
      <p class="in">in</p>
      <div class="select">
        <div class="iconbox" @click="select=true">
          <p v-for="(li,index) in rangeList" :key="index" v-if="key.selectid===li.id">{{li.name}}</p>
          <div class="icon">
            <Icon type="md-arrow-dropup" />
            <Icon type="md-arrow-dropdown" />
          </div>
        </div>
        <ul v-if="select" @mouseleave="select=false">
          <li v-for="(li,index) in rangeList" :key="index" @click="showSelect(li)">{{li.name}}</li>
        </ul>
      </div>
      <div class="more">
        <button class="btn-bg" @click="simpleSearch">搜索</button>
        <p class="advanced" @click="seniorSearch">高级搜索</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    rangeList: function () {
      return this.selectBox
    }
  },
  data () {
    return {
      select: false,
      key: {
        page: 1,
        text: '',
        selectid: 1,
        style: -1
      },
      selectBox: [
        {
          id: 1,
          name: '全部'
        }, {
          id: 2,
          name: '标题'
        }, {
          id: 3,
          name: '内容'
        }
      ]
    }
  },
  methods: {
    showSelect (key) {
      this.select = false
      this.key.selectid = key.id
    },
    simpleSearch () {
      this.$emit('on-search', this.key)
      this.$router.push('/search')
    },
    seniorSearch () {
      this.key.style = 1
      this.$emit('on-search', this.key)
      this.$router.push('/search')
      // 还原
      this.key.style = -1
    }
  }
}
</script>

<style lang="scss" scoped>
.search-box{
  margin: -20px;
  padding: 20px;
  font-size: 14px;
}
.box{
  display: flex;
  align-items: center;
  flex-direction: row;
  input{
    box-sizing: border-box;
    padding: 0 10px;
    width: 600px;
    height: 45px;
    border: none;
    background-color: #eee;
    font-size: 18px;
  }
  .in{
    margin: 0 40px;
    font-size: 24px;
  }
  .select{
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    width: 160px;
    height: 45px;
    border-radius: 2px;
    background-color: #eee;
    .iconbox{
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      cursor: pointer;
      p{
        overflow: hidden;
        margin-right: 10px;
        width: 90%;
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
      top:45px;
      left: 0;
      z-index: 2;
      overflow-y: auto;
      max-height: 200px;
      width: 100%;
      border: 1px solid #eee;
      background-color: #fff;
      cursor: pointer;
      li{
        padding: 10px;
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
    button{
      margin: 0 44px;
      width: 116px;
      height: 45px;
      border: none;
      border-radius: 2px;
      font-size: 18px;
    }
    .advanced{
      color: #2d8cf0;
      font-size: 18px;
      cursor: pointer;
    }
  }
}
</style>

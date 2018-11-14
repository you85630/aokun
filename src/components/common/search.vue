<template>
  <div class="search-box">
    <div class="input-box">
      <Input v-model="key.text" size="large" placeholder="输入关键字" style="width: 92%;">
          <Select v-model="select" slot="prepend" style="width: 80px">
              <Option v-for="(li,index) in rangeList" :key="index" :value="li.name">{{li.name}}</Option>
          </Select>
          <Button slot="append" style="width: 80px; color:#fff;" @click="simpleSearch">搜索</Button>
      </Input>
      <p class="advanced" @click="seniorSearch">高级搜索</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: '全部',
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
      ],
      key: {
        page: 1,
        text: '',
        selectid: 1,
        style: -1
      }
    }
  },
  computed: {
    rangeList: function () {
      return this.selectBox
    }
  },
  methods: {
    selectId (val) {
      let list = this.selectBox
      for (let i = 0; i < list.length; i++) {
        const element = list[i]
        if (element.name === this.select) {
          this.key.selectid = element.id
        }
      }
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
  },
  watch: {
    'select': 'selectId'
  }
}
</script>

<style lang="scss">
.search-box{
  margin: -20px;
  padding: 20px;
  font-size: 14px;
}
.input-box{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  .advanced{
    color: #2d8cf0;
    font-size: 14px;
    cursor: pointer;
  }
  .ivu-input-group-append{
    border: 1px solid #2d8cf0;
    background-color: #2d8cf0;
  }
}
</style>

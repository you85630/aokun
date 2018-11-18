<template>
  <div class="search">
    <bg-color>
      <y-search :list="moreLeftNavBox" @on-search="search"></y-search>
    </bg-color>

    <bg-color>
      <div class="result">
        <filter-box :showBox="leftNavBox" @on-click="filterSearch"></filter-box>

        <div class="result-box" v-if="num">
          <div class="title">搜索结果：（<span>{{num}}</span>）</span></div>

          <div class="page-box">
            <Page :total="num" show-elevator @on-change="nowPage" />
          </div>
          <div class="item-box">
            <item-box v-for="(li,index) in itemList" :key="index" :item="li"></item-box>
            <Spin fix v-if="showbox"></Spin>
          </div>
          <div class="page-box">
            <Page :total="num" show-elevator @on-change="nowPage" />
          </div>
        </div>
        <div v-else class="data-none">
          <p>暂无数据</p>
        </div>
      </div>
    </bg-color>
  </div>
</template>

<script>
import filterBox from 'components/modules/filter-box'
import itemBox from 'components/modules/item-box'

import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      showbox: false
    }
  },
  components: {
    filterBox,
    itemBox
  },
  computed: {
    ...mapGetters([
      'leftNavBox',
      'itemList',
      'num',
      'moreLeftNavBox'
    ]),
    pages: function () {
      let page = {
        active: 1,
        all: Math.ceil(this.num / 10)
      }
      return page
    }
  },
  methods: {
    ...mapActions([
      'searchData'
    ]),
    init () {
      let router = this.$router.currentRoute.query
      if (router.categry === 1100004) {
        this.$router.push('/search/airworthiness')
      }
      if (router.categry === 5100002) {
        this.$router.push('/search/relation')
      }
      // 默认搜索一次
      let searchKey = {
        selectid: 1,
        style: -1,
        text: '',
        page: 1
      }
      let text = JSON.parse(sessionStorage.getItem('key'))
      if (text) {
        searchKey.text = text
      }
      this.search(searchKey)
    },
    // 过滤器
    filterSearch (key) {
      this.search({company: key.id})
    },
    // 搜索
    search (key) {
      this.showbox = false
      setTimeout(() => {
        this.showbox = false
      }, 500)
      this.searchData(key)
      sessionStorage.setItem('search', JSON.stringify(key))
      sessionStorage.removeItem('key')
    },
    // 翻页
    nowPage (key) {
      let search = JSON.parse(sessionStorage.getItem('search'))
      search.page = key
      this.searchData(search)
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.search{
  .result{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: -20px;
  }
}
.result-box{
  box-sizing: border-box;
  padding-bottom: 20px;
  width: 100%;
  .title{
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 14px;
    span{
      margin: 0 4px;
    }
  }
}
.page-box{
  margin: 12px 0;
  text-align: center;
}
.item-box{
  position: relative;
}
.data-none{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  color: #ccc;
  font-size: 16px;
  padding-bottom: 20px;
}
</style>

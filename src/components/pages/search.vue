<template>
  <div class="search">
    <bg-color>
      <y-search @on-search="search"></y-search>
    </bg-color>

    <bg-color>
      <div class="result">
        <filter-box v-if="more" :showBox="leftNavBox" @on-click="filterSearch"></filter-box>

        <div class="result-box">
          <div class="title">搜索结果：（<span>{{num}}</span>）</span></div>
          <div class="page-box" v-if="num">
            <Page :total="num" show-elevator @on-change="nowPage" />
          </div>
          <div class="item-box">
            <item-box v-for="(li,index) in itemList" :key="index" :item="li" v-if="num"></item-box>
            <div v-if="!num" class="data-none">
              <p>暂无数据</p>
            </div>
          </div>
          <div class="page-box" v-if="num">
            <Page :total="num" show-elevator @on-change="nowPage" />
          </div>
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
      more: true
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
      'num'
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
      // 默认搜索一次
      let searchKey = {
        selectid: 1,
        style: -1,
        text: '',
        page: 1,
        subCids: -1,
        bigCids: -1
      }
      let text = JSON.parse(sessionStorage.getItem('key'))
      let style = JSON.parse(sessionStorage.getItem('style'))
      if (text) {
        searchKey.text = text
      }
      if (style === 1) {
        this.more = false
      }

      let router = this.$router.currentRoute.query
      if (router.categry) {
        if (router.categry === 1100004) {
          this.$router.push('/search/airworthiness')
        }
        if (router.categry === 5100002) {
          this.$router.push('/search/relation')
        }
        searchKey.subCids = router.categry
        searchKey.bigCids = router.classify
        let list = this.leftNavBox[1].label
        for (let i = 0; i < list.length; i++) {
          const element = list[i]
          element.type = false
          if (element.id === router.classify) {
            element.type = true
          }
        }
      }

      this.search(searchKey)
      this.$router.push('/search')
    },
    // 过滤器
    filterSearch (key) {
      if (typeof key.id === 'number') {
        this.search({bigCids: key.id, style: -1})
      } else {
        this.search({oragons: key.id, style: -1})
      }
    },
    // 搜索
    search (key) {
      this.nameBox = ''
      if (key.style === -1) {
        this.more = true
      } else {
        this.more = false
      }
      this.nameBox = key.text

      this.searchData(key)

      sessionStorage.setItem('search', JSON.stringify(key))
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
  }
}
.result-box{
  box-sizing: border-box;
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
  height: 240px;
  color: #ccc;
  font-size: 16px;
}
</style>

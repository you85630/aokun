<template>
  <div class="search" v-if="status">
    <bg-color>
      <y-search :search="searchKey" @on-search="search" @on-refresh="refresh"></y-search>
    </bg-color>

    <bg-color>
      <div class="result">
        <filter-box :select="selectValue" v-if="searchKey.style===-1" :showBox="leftNavBox" @on-click="filterSearch"></filter-box>
        <filter-box v-else :showBox="moreLeftNavBox" @on-click="filterSearch"></filter-box>

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
      status: true,
      selectValue: '',
      searchKey: {
        text: '',
        oragons: '',
        bigCids: '',
        subCids: '',
        startTime: '',
        endTime: '',
        year: '',
        status: '',
        selectid: 1,
        style: -1,
        page: 1
      }
    }
  },
  components: {
    filterBox,
    itemBox
  },
  computed: {
    ...mapGetters([
      'leftNavBox',
      'moreLeftNavBox',
      'itemList',
      'num'
    ])
  },
  methods: {
    ...mapActions([
      'searchData'
    ]),
    init () {
      // 默认搜索一次
      let text = JSON.parse(sessionStorage.getItem('key'))
      let home = JSON.parse(sessionStorage.getItem('home'))

      if (text) {
        this.searchKey.text = text
      }

      if (home) {
        if (home.categry === 1100004) {
          this.$router.push('/search/airworthiness')
        } else if (home.categry === 5100002) {
          this.$router.push('/search/relation')
        } else {
          this.searchKey.subCids = home.categry
          this.searchKey.bigCids = home.classify
          // 选中状态
          this.selectValue = home.name
        }
      }
      this.search(this.searchKey)
    },
    // 过滤器
    filterSearch (key) {
      sessionStorage.removeItem('home')
      let search = JSON.parse(sessionStorage.getItem('search'))
      this.searchKey = search
      if (this.searchKey.style === 1) {
        switch (key.sort) {
          case 'oragons':
            this.searchKey.oragons = key.id
            break
          case 'cids':
            this.searchKey.bigCids = key.id
            break
          case 'status':
            this.searchKey.status = key.id
            break
          case 'years':
            this.searchKey.year = key.id
            break
        }
      } else {
        switch (key.sort) {
          case 'oragons':
            this.searchKey.oragons = key.id
            this.searchKey.bigCids = ''
            break
          case 'cids':
            this.searchKey.bigCids = key.id
            this.searchKey.oragons = ''
            break
        }
      }
      this.search(this.searchKey)
    },
    // 搜索
    search (key) {
      this.searchKey = key
      sessionStorage.setItem('search', JSON.stringify(key))
      this.searchData(key)
    },
    // 翻页
    nowPage (key) {
      let search = JSON.parse(sessionStorage.getItem('search'))
      search.page = key
      this.searchData(search)
    },
    // 重置
    refresh (style) {
      this.status = false
      this.$nextTick(function () {
        this.status = true
        this.selectValue = ''
        this.searchKey = {
          text: '',
          oragons: '',
          bigCids: '',
          subCids: '',
          startTime: '',
          endTime: '',
          year: '',
          status: '',
          selectid: 1,
          style: style,
          page: 1
        }
        this.search(this.searchKey)
      })
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

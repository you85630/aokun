<template>
  <div class="search">
    <bg-color>
      <search-box :selectBox="searchSelect" @on-search="search"></search-box>
      <div class="result">
        <filter-box :showBox="linklist" @on-click="filterBox"></filter-box>
        <div class="result-box">
          <div class="title">搜索结果：<p>{{searchList}}</p>（<span>{{num}}</span>）</span></div>
          <div class="box">
            <div class="page-box" v-if="status">
              <y-page :page="Page" @on-click="nowPage"></y-page>
            </div>
            <div class="list-box">
              <item-box v-for="(li,index) in itemList" :key="index" :item="li"></item-box>
            </div>
            <div class="page-box" v-if="status">
              <y-page :page="Page" @on-click="nowPage"></y-page>
            </div>
          </div>
        </div>
      </div>
    </bg-color>
  </div>
</template>

<script>
import searchBox from 'components/common/search'
import filterBox from 'components/modules/search/filter-box'
import itemBox from 'components/modules/search/item-box'

import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      status: true,
      key: {
        page: 1,
        categry: -1,
        key: -1,
        unit: -1,
        number: -1,
        selectid: -1,
        stime: -1,
        etime: -1
      },
      searchList: ''
    }
  },
  components: {
    searchBox,
    filterBox,
    itemBox
  },
  computed: {
    ...mapGetters([
      'searchSelect',
      'linklist',
      'itemList',
      'num'
    ]),
    Page: function () {
      let now = {
        all: Math.ceil(this.num / 10),
        active: 1
      }
      return now
    }
  },
  mounted () {
    this.init()
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

      if (sessionStorage.getItem('key')) {
        this.key = JSON.parse(sessionStorage.getItem('key'))
        this.searchList = this.key.key
      } else {
        if (router.categry) {
          this.key.categry = router.categry
        } else {
          this.key.categry = -1
        }
      }

      this.searchData(this.key)
    },

    // 搜索
    search (key) {
      sessionStorage.removeItem('key')
      this.searchList = key.key
      let router = this.$router.currentRoute.query.categry
      if (router) {
        key.categry = router
      } else {
        key.categry = -1
      }
      this.searchData(key)
    },
    // 过滤器
    filterBox (key) {
      this.searchList = ''
      this.key = {
        page: 1,
        categry: -1,
        key: -1,
        unit: -1,
        number: -1,
        selectid: -1,
        stime: -1,
        etime: -1
      }
      if (key.id === 1100004) {
        this.$router.push('/search/airworthiness')
      } else if (key.id === 5100002) {
        this.$router.push('/search/relation')
      } else {
        this.key.categry = key.id
        this.$router.push({name: 'search', query: {categry: key.id}})
      }
      this.searchData(this.key)
    },
    // 翻页
    nowPage (key) {
      this.Page.active = key
      this.status = false
      this.$nextTick(function () {
        this.status = true
      })
      this.key.page = key

      this.searchData(this.key)
    }
  },
  watch: {
    '$route': {
      handler: function (val) {
        let key = val.query.categry
        if (!key) {
          this.key.categry = -1
          this.searchData(this.key)
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  .result{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
  }
}
.result-box{
  box-sizing: border-box;
  width: 764px;
  .title{
    padding: 14px 20px;
    background-color: #fff;
    color: #316EC3;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
    p{
      color: #f00;
    }
    span{
      margin: 0 4px;
    }
  }
  .box{
    box-sizing: border-box;
    padding: 14px 20px;
    background-color: #fff;
  }
}
.page-box{
  font-size: 14px;
}
</style>

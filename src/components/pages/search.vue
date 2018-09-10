<template>
  <div class="search">
    <bg-color>
      <search-box :selectBox="searchSelect" @on-search="searchData"></search-box>
      <div class="result">
        <filter-box :showBox="linklist" @on-click="filterBox"></filter-box>
        <div class="result-box">
          <div class="title">搜索结果（<span>{{resultList.num}}</span>）</span></div>
          <div class="box">
            <div class="page-box">
              <div class="page">
                <y-page :page="resultList.page" @on-click="nowPage"></y-page>
              </div>
            </div>
            <div class="list-box">
              <item-box v-for="(li,index) in itemList" :key="index" :item="li"></item-box>
            </div>
            <div class="page-box">
              <y-page :page="resultbtn" @on-click="nowPage"></y-page>
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
  components: {
    searchBox,
    filterBox,
    itemBox
  },
  computed: {
    ...mapGetters([
      'searchSelect',
      'linklist',
      'itemList'
    ]),
    resultbtn: function () {
      let now = {
        active: this.resultList.page.active,
        all: this.resultList.page.all
      }
      return now
    }
  },
  data () {
    return {
      resultList: {
        num: 1234,
        page: {
          all: 10,
          active: 1
        }
      },
      key: {
        page: 1,
        categry: -1,
        key: -1,
        number: -1,
        selectid: -1,
        stime: -1,
        etime: -1
      }
    }
  },
  mounted () {
    this.init(this.key)
  },
  methods: {
    ...mapActions([
      'searchData'
    ]),
    init (key) {
      let router = this.$router.currentRoute.query.categry
      if (router) {
        key.categry = router
      }
      this.searchData(key)
    },
    // 过滤器
    filterBox (key) {
      this.key.categry = key.id
      this.searchData(this.key)
    },
    // 翻页
    nowPage (key) {
      this.key.page = key
      this.searchData(this.key)
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
  .page{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
}
</style>

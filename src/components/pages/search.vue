<template>
  <div class="search"
       v-if="status">
    <bg-color>
      <y-search :search="searchKey"
                @on-search="search"
                @on-refresh="refresh"></y-search>
    </bg-color>

    <bg-color>
      <div class="result">
        <div v-if="gaoji==-1">
          <filter-box :select="selectValue"
                      v-if="searchKey.style===-1"
                      :showBox="leftNavBox"
                      @on-click="filterSearch"></filter-box>
          <filter-box v-else
                      :showBox="moreLeftNavBox"
                      @on-click="filterSearch"></filter-box>
        </div>
        <div v-else>
          <filter-box-adv :select="selectValue"
                          v-if="searchKey.style===-1"
                          :showBox="leftNavBox"
                          @on-click="filterSearch"></filter-box-adv>
          <filter-box-adv v-else
                          :showBox="moreLeftNavBox"
                          @on-click="filterSearch"></filter-box-adv>
        </div>

        <div class="result-box">
          <div v-if='SpinShow'>
            <div class="title">搜索结果：（<span>{{num}}</span>）</span></div>
            <div class="page-box"
                 v-if="num">
              <Page :total="num"
                    show-elevator
                    @on-change="nowPage" />
            </div>
            <div class="item-box">
              <item-box v-for="(li,index) in itemList"
                        :key="index"
                        :item="li"
                        v-if="num"></item-box>
              <div v-if="!num"
                   class="data-none">
                <p>暂无数据</p>
              </div>
            </div>
            <div class="page-box"
                 v-if="num">
              <Page :total="num"
                    show-elevator
                    @on-change="nowPage" />
            </div>
          </div>
          <div class="spin-box"
               v-else>
            <Spin fix>
              <Icon type="ios-loading"
                    size=18
                    class="spin-box-load"></Icon>
              <div>Loading</div>
            </Spin>
          </div>
        </div>
      </div>
    </bg-color>
  </div>
</template>

<script>
import filterBox from 'components/modules/filter-box'
import filterBoxAdv from 'components/modules/filter-box-adv'
import itemBox from 'components/modules/item-box'

import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      status: true,
      gaoji: -1,
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
      },
      SpinShow: true
    }
  },
  components: {
    filterBox,
    filterBoxAdv,
    itemBox
  },
  computed: {
    ...mapGetters(['leftNavBox', 'moreLeftNavBox', 'itemList', 'num'])
  },
  methods: {
    ...mapActions(['searchData', 'getMoreSearch']),
    init () {
      this.getMoreSearch()
      // 默认搜索一次
      let text = JSON.parse(this.VueCookie.get('AOKUN-KEY'))
      let home = JSON.parse(this.VueCookie.get('AOKUN-HOME'))

      if (text) {
        this.searchKey.text = text
      }

      if (home) {
        if (home.categry === '1100004') {
          this.$router.push('/search/airworthiness')
        } else if (home.categry === '5100002') {
          this.$router.push('/search/relation')
        } else {
          this.searchKey.subCids = home.categry
          this.searchKey.bigCids = home.classify
          this.searchKey.oragons = home.oragons
          // 选中状态
          this.selectValue = home.name
        }
      }
      this.search(this.searchKey)
    },
    // 过滤器
    filterSearch (key) {
      this.VueCookie.delete('AOKUN-HOME')
      let search = JSON.parse(this.VueCookie.get('AOKUN-SEARCH'))
      this.searchKey = search

      if (this.searchKey.style === 1) {
        if (key.sort === 'oragons') {
          this.searchKey.oragons = key.id
        }
        if (key.sort === 'cids') {
          this.searchKey.bigCids = key.id
        }
        if (key.sort === 'status') {
          this.searchKey.status = key.id
        }
        if (key.sort === 'years') {
          this.searchKey.year = key.id
        }
      } else {
        for (var searchType in key) {
          if (searchType === '0') {
            this.searchKey.oragons = key[searchType].join(',')
          }
          if (searchType === '1') {
            this.searchKey.bigCids = key[searchType].join(',')
          }
        }
      }
      this.search(this.searchKey)
    },

    // 搜索
    search (key) {
      this.searchKey = key
      this.VueCookie.set('AOKUN-SEARCH', JSON.stringify(key))
      this.searchData(key)
      this.SpinShow = false
      setTimeout(() => {
        this.SpinShow = true
      }, 500)
    },
    // 翻页
    nowPage (key) {
      let search = JSON.parse(this.VueCookie.get('AOKUN-SEARCH'))
      search.page = key
      this.searchData(search)
    },
    // 重置
    refresh (style) {
      this.gaoji = style
      this.status = false
      this.$nextTick(function () {
        this.status = true
        this.selectValue = ''
        this.VueCookie.delete('AOKUN-KEY')
        this.VueCookie.delete('AOKUN-HOME')
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
.search {
  .result {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
.result-box {
  box-sizing: border-box;
  width: 100%;
  .title {
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 14px;
    span {
      margin: 0 4px;
    }
  }
}
.page-box {
  margin: 12px 0;
  text-align: center;
}
.item-box {
  position: relative;
}
.data-none {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 240px;
  color: #ccc;
  font-size: 16px;
}
.spin-box-load {
  animation: spin-box 5s linear infinite;
}
@keyframes spin-box {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.spin-box {
  height: 100%;
  position: relative;
}
</style>

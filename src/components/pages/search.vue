<template>
  <div class="search">
    <bg-color>
      <search-box :selectBox="searchSelect" @on-search="searchData"></search-box>
      <div class="result">
        <filter-box :showBox="showBox" @on-click="filterBox"></filter-box>
        <div class="result-box">
          <div class="title">搜索结果（<span>{{resultList.num}}</span>）</span></div>
          <div class="box">
            <div class="page-box">
              <div class="page">
                <y-page :page="resultList.page" @on-click="nowPage"></y-page>
                <div class="select">
                  <y-select v-model="resultList.pageNum.active" :select="resultList.pageNum" @on-click="nowPageSelect"></y-select>
                </div>
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
      'searchSelect'
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
        },
        pageNum: {
          active: 10,
          list: [
            {
              name: 20
            }, {
              name: 50
            }
          ]
        }
      },
      itemList: [
        {
          name: '全国人民代表大会常务委员会关于修改《中华人民共和国会计法》等十一部法律的决定',
          number: '中华人民共和国主席令第81号',
          time: '2017年11月04日',
          key: 1
        }, {
          name: '全国人民代表大会常务委员会关于修改《中华人民共和国会计法》等十一部法律的决定',
          number: '中华人民共和国主席令第81号',
          time: '2017年11月04日',
          key: 2
        }
      ],
      showBox: [
        {
          type: false,
          name: '类别1',
          box: [
            {
              type: false,
              name: '内容1'
            }, {
              type: false,
              name: '内容2'
            }
          ]
        }, {
          type: false,
          name: '类别1',
          box: [
            {
              type: false,
              name: '内容1'
            }, {
              type: false,
              name: '内容2'
            }
          ]
        }, {
          type: false,
          name: '类别1',
          box: [
            {
              type: false,
              name: '内容1'
            }, {
              type: false,
              name: '内容2'
            }
          ]
        }, {
          type: false,
          name: '类别1',
          box: [
            {
              type: false,
              name: '内容1'
            }, {
              type: false,
              name: '内容2'
            }
          ]
        }, {
          type: false,
          name: '类别1',
          box: [
            {
              type: false,
              name: '内容1'
            }, {
              type: false,
              name: '内容2'
            }
          ]
        }, {
          type: false,
          name: '类别1',
          box: [
            {
              type: false,
              name: '内容1'
            }, {
              type: false,
              name: '内容2'
            }
          ]
        }
      ]
    }
  },
  methods: {
    ...mapActions([
      'searchData'
    ]),
    // 过滤器
    filterBox (key) {
      console.log(key)
    },
    // 翻页
    nowPage (key) {
      console.log(key)
    },
    // 当前页面个数
    nowPageSelect (key) {
      console.log(key)
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
    .select{
      width: 60px;
      height: 25px;
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="search">
    <bg-color>
      <search-box></search-box>
      <div class="result">
        <filter-box :showTitle="showTitle" :showBox="showBox" @on-click="filterBox"></filter-box>
        <div class="result-box">
          <div class="title">搜索结果（<span>{{resultList.num}}</span>）</span></div>
          <div class="box">
            <div class="page-box">
              <div class="sort">
                <h2>排序方法：</h2>
                <div class="select">
                  <y-select v-model="resultList.sort.active" :select="resultList.sort" @on-click="nowSort"></y-select>
                </div>
              </div>
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

export default {
  components: {
    searchBox,
    filterBox,
    itemBox
  },
  computed: {
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
        },
        sort: {
          active: '关联',
          list: [
            {
              name: '关联'
            }, {
              name: '最新'
            }, {
              name: '标题'
            }
          ]
        }
      },
      itemList: [
        {
          list: [
            {
              name: '名称',
              info: '全国人民代表大会常务委员会关于修改《中华人民共和国会计法》等十一部法律的决定'
            },
            {
              name: '主题分类',
              info: '法律'
            },
            {
              name: '办文单位',
              info: '政策法规司'
            },
            {
              name: '发文日期',
              info: '2017-11-04'
            },
            {
              name: '文号',
              info: '中华人民共和国主席令第81号'
            },
            {
              name: '有效性',
              info: '有效'
            }
          ],
          content: '第十二届全国人民代表大会常务委员会第三十次会议通过,第十二届全国人民代表大会常务委员会第三十次会议决定：一、对《中华人民共和国会计法》作出修改'
        }, {
          list: [
            {
              name: '名称',
              info: '全国人民代表大会常务委员会关于修改《中华人民共和国会计法》等十一部法律的决定'
            },
            {
              name: '主题分类',
              info: '法律'
            },
            {
              name: '办文单位',
              info: '政策法规司'
            },
            {
              name: '发文日期',
              info: '2017-11-04'
            },
            {
              name: '文号',
              info: '中华人民共和国主席令第81号'
            },
            {
              name: '有效性',
              info: '有效'
            }
          ],
          content: '第十二届全国人民代表大会常务委员会第三十次会议通过,第十二届全国人民代表大会常务委员会第三十次会议决定：一、对《中华人民共和国会计法》作出修改'
        }
      ],
      showTitle: [
        {
          type: false,
          name: '新增内容'
        }, {
          type: false,
          name: '我的访问'
        }, {
          type: false,
          name: '全文搜索'
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
    },
    // 排序
    nowSort (key) {
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
  .sort{
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    h2{
      font-size: 14px;
    }
    .select{
      width: 80px;
      height: 25px;
      font-size: 14px;
    }
  }
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

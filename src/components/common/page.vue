<template>
  <div class="page-list">
    <ul>
      <li @click="nowPage(1)" :class="{none:pageMas.active==1,active:pageMas.active!==1}"><button>首页</button></li>
      <li @click="nowPage(pageMas.active-1)" :class="{none:pageMas.active==1,active:pageMas.active!==1}"><button>上一页</button></li>

      <li v-if="pageMas.active>3">…</li>

      <li @click="nowPage(pageMas.active-2)" v-if="pageMas.active-2>0"><button>{{pageMas.active-2}}</button></li>
      <li @click="nowPage(pageMas.active-1)" v-if="pageMas.active-1>0"><button>{{pageMas.active-1}}</button></li>

      <li class="active"><button>{{pageMas.active}}</button></li>

      <li @click="nowPage(pageMas.active+1)" v-if="pageMas.active+1<page.all+1"><button>{{pageMas.active+1}}</button></li>
      <li @click="nowPage(pageMas.active+2)" v-if="pageMas.active+2<page.all+1"><button>{{pageMas.active+2}}</button></li>

      <li v-if="page.all>5">…</li>

      <li @click="nowPage(pageMas.active+1)" :class="{none:pageMas.active==page.all,active:pageMas.active!==page.all}"><button>下一页</button></li>
      <li @click="nowPage(page.all)" :class="{none:pageMas.active==page.all,active:pageMas.active!==page.all}"><button>末页</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['page'],
  computed: {
    pageMas: function () {
      return this.page
    }
  },
  methods: {
    nowPage (key) {
      let len = this.pageMas.all
      if (key <= 0) {
        key = 1
      }
      if (key >= len) {
        key = len
      }
      this.pageMas.active = key
      this.$emit('on-click', key)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-list{
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 12px 0;
    ul{
      display: flex;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      li{
        margin-right: 10px;
        &:last-child{
          margin-right: 0;
        }
        button{
          padding: 2px 8px;
          border: none;
          border-radius: 2px;
          background-color: #eee;
        }
      }
      .active{
        button{
          background-color: #2d8cf0;
          color: #fff;
        }
      }
      .none{
        button{
          background-color: #eee;
          color: #666;
          cursor: not-allowed;
        }
      }
    }
  }
</style>

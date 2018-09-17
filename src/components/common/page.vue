<template>
  <div class="page-list">
    <ul>
      <li @click="nowPage(1)" :class="{none:page.active==1,active:page.active!==1}"><button>首页</button></li>
      <li @click="nowPage(page.active-1)" :class="{none:page.active==1,active:page.active!==1}"><button>上一页</button></li>

      <li v-if="page.active>3">…</li>

      <li @click="nowPage(page.active-2)" v-if="page.active-2>0"><button>{{page.active-2}}</button></li>
      <li @click="nowPage(page.active-1)" v-if="page.active-1>0"><button>{{page.active-1}}</button></li>

      <li class="active"><button>{{page.active}}</button></li>

      <li @click="nowPage(page.active+1)" v-if="page.active+1<page.all+1"><button>{{page.active+1}}</button></li>
      <li @click="nowPage(page.active+2)" v-if="page.active+2<page.all+1"><button>{{page.active+2}}</button></li>

      <li v-if="page.all>5">…</li>

      <li @click="nowPage(page.active+1)" :class="{none:page.active==page.all,active:page.active!==page.all}"><button>下一页</button></li>
      <li @click="nowPage(page.all)" :class="{none:page.active==page.all,active:page.active!==page.all}"><button>末页</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['page'],
  methods: {
    nowPage (key) {
      let len = this.page.all
      if (key === 0) {
        key = 1
      }
      if (key === len) {
        key = len
      }
      this.$emit('on-click', key)
    }
  },
  mounted () {
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

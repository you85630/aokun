<template>
  <div class="airworthiness">
    <bg-color>
      <table class="table">
        <tr>
          <th v-for="(li,index) in headline" :key="index">{{li}}</th>
        </tr>
        <tr v-for="(tr,index) in shzlList" :key="index">
          <td>{{tr.no}}</td>
          <td>{{tr.xzno}}</td>
          <td>{{tr.title}}</td>
          <td>{{tr.company}}</td>
          <td> <a :href="tr.pdflink" target="_blank">{{tr.pdfname}}</a></td>
          <td>{{tr.time}}</td>
        </tr>
      </table>
      <div class="page" v-if="status">
        <y-page :page="tablePage" @on-click="nowPage"></y-page>
      </div>
    </bg-color>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      status: true,
      headline: ['指令编号', '修正案号', '标题', '颁发单位', '参考文件', '生效日期']
    }
  },
  computed: {
    ...mapGetters([
      'shzlList',
      'allList'
    ]),
    tablePage: function () {
      let now = {
        all: Math.ceil(this.allList / 10),
        active: 1
      }
      return now
    }
  },
  methods: {
    ...mapActions([
      'getShzl'
    ]),
    init () {
      this.getShzl(1)
    },
    nowPage (key) {
      this.tablePage.active = key
      this.status = false
      this.$nextTick(function () {
        this.status = true
      })
      this.getShzl(key)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.airworthiness{
  width: 100%;
  table{
    background-color: #fff;
    width: 100%;
    border: 1px solid #ccc;
    th,
    td{
      padding: 10px;
      border: 1px solid #ccc;
      font-size: 12px;
    }
    th{
      font-weight: bold;
      word-break: keep-all;
      font-size: 14px;
    }
  }
  .page{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 12px;
    margin-top: 20px;
  }
}
</style>

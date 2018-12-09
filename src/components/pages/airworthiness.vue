<template>
  <div class="airworthiness">
    <bg-color>
      <Table :columns="columns" :data="shzlList"></Table>
      <div class="page-box">
        <Page :total="allList" show-elevator @on-change="next" />
      </div>
    </bg-color>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      columns: [
        {
          title: '指令编号',
          key: 'no',
          width: 160,
          align: 'center'

        },
        {
          title: '修正案号',
          key: 'xzno',
          width: 110,
          align: 'center'

        },
        {
          title: '标题',
          key: 'title',
          tooltip: true
        },
        {
          title: '颁发单位',
          key: 'company',
          tooltip: true
        },
        {
          title: '参考文件',
          key: 'ck_titile',
          width: 170,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('a', {
                on: {
                  'click': () => {
                    window.open(params.row.ck_href, '_blank')
                  }
                }
              }, params.row.ck_titile)
            ])
          }
        },
        {
          title: '生效日期',
          key: 'time',
          width: 110,
          align: 'center'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'shzlList',
      'allList'
    ])
  },
  methods: {
    ...mapActions([
      'getShzl'
    ]),
    init () {
      this.getShzl(1)
      this.VueCookie.delete('AOKUN-HOME')
    },
    next (key) {
      this.getShzl(key)
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.airworthiness{
  width: 100%;
  .page-box{
    margin-top: 20px;
    text-align: right;
  }
}
</style>

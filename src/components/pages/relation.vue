<template>
  <div class="relation">
    <bg-color>
      <Collapse accordion v-model="open">
          <Panel v-for="(li,index) in contoryList" :key="index">
            {{li.areaName}}
            <div slot="content" class="content">
              <p @click="cdetail(i.id,li.area_id)" v-for="(i,val) in li.data" :key="val" :class="{active:i.id===now}">{{i.name}}</p>
            </div>
          </Panel>
      </Collapse>
    </bg-color>
    <div class="contory" v-if="cdetailList.areaName">
      <div class="name">
        <p><span>国家：</span>{{cdetailList.name}}</p>
        <p><span>地区：</span>{{cdetailList.areaName}}</p>
      </div>
      <div class="info">
        <h2>附件：</h2>
        <p v-for="(li,index) in cdetailList.pdflist" :key="index">
          <a :href="li.link">{{li.name}}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      now: '0',
      open: '0'
    }
  },
  computed: {
    ...mapGetters([
      'contoryList',
      'cdetailList'
    ])
  },
  methods: {
    ...mapActions([
      'getContory',
      'getCdetail'
    ]),
    init () {
      this.getContory()
      sessionStorage.removeItem('home')
    },
    cdetail (key) {
      this.now = key
      this.getCdetail(key)
    }
  },
  created () {
    this.init()
    this.cdetail(40000)
  }
}
</script>

<style lang="scss" scoped>
.relation{
  width: 100%;
}
.content{
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  p{
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    &:hover{
      color:#316EC3;
    }
  }
  .active{
    color:#316EC3;
  }
}
.contory{
  margin-top: -10px;
  padding: 40px 0;
  .name{
    display: flex;
    align-items: center;
    flex-direction: row;
    p{
      margin-right: 40px;
      font-size: 16px;
      span{
        font-weight: bold;
      }
    }
  }
  .info{
    margin-top: 10px;
    font-size: 14px;
  }
}
</style>

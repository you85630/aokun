<template>
  <div class="relation">
    <bg-color>
      <ul>
        <li v-for="(li,index) in contoryList" :key="index">
          <div class="name" @click="openText(index)"><Icon :type="li.open?'ios-remove':'ios-add'" />{{li.areaName}}</div>
          <div class="text" v-if="li.open">
            <p @click="cdetail(i.id)" v-for="(i,val) in li.data" :key="val" :class="{active:i.id===now}">{{i.name}}</p>
          </div>
        </li>
      </ul>
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
      now: 0
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
    },
    openText (key) {
      let list = this.contoryList
      for (const key in list) {
        if (list.hasOwnProperty(key)) {
          list[key].open = false
        }
      }
      list[key].open = !list[key].open
    },
    cdetail (key) {
      this.now = key
      this.getCdetail(key)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.relation{
  width: 100%;
  ul{
    width: 100%;
    border-top:none;
    li{
      width: 100%;
      .name{
        display: flex;
        align-items: center;
        flex-direction: row;
        box-sizing: border-box;
        margin-bottom: 10px;
        padding: 10px;
        background-color: #051520;
        color: #ccc;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        i{
          margin-right: 4px;
          font-weight: bold;
          font-size: 18px;
        }
      }
      .text{
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
        margin-bottom: 10px;
        background-color: #fff;
        color: #051520;
        p {
          padding: 10px;
          font-size: 14px;
          cursor: pointer;
        }
        .active{
          color:#316EC3;
        }
      }
    }
  }
}
.contory{
  margin-top: -10px;
  padding: 40px 0;
  color: #051520;
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

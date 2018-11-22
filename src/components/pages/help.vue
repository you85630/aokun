<template>
  <div class="help">
    <bg-color>
      <y-search></y-search>
    </bg-color>

    <bg-color :header="header">
      <div class="box">
        <div class="left">
          <ul>
            <li v-for="(li,index) in leftNav" :key="index">
              <h2>{{li.title}}</h2>
              <p v-for="(i,val) in li.data" :key="val">{{i.title}}</p>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul class="help-tips">
            <li v-for="(li,index) in helpTips" :key="index">
              <img :src="li.img" alt="">
              <p>{{li.name}}</p>
            </li>
          </ul>
          <Collapse v-model="open">
            <Panel v-for="(li,index) in issueBox" :key="index">
              {{li.title}}
              <div slot="content">
                <Collapse v-model="open1">
                  <Panel v-for="(i,val) in li.data" :key="val" :name="index+'-'+val">
                    {{i.title}}-{{index+'-'+val}}
                    <p slot="content">{{i.desc}}</p>
                  </Panel>
                </Collapse>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </bg-color>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      open: '0',
      open1: '0-0',
      header: '翱坤帮助资源'
    }
  },
  computed: {
    ...mapGetters([
      'leftNav',
      'helpTips',
      'issueBox'
    ])
  },
  methods: {
    ...mapActions([
      'getHelp',
      'getAsk'
    ]),
    openText (key) {
      let list = this.issueBox
      list[key].show = !list[key].show
    },
    openVal (i, k) {
      let list = this.issueBox
      list[i].data[k].show = !list[i].data[k].show
    }
  },
  created () {
    this.getHelp()
    this.getAsk()
  }
}
</script>

<style lang="scss" scoped>
.box{
  display: flex;
  flex-direction: row;
  .left{
    box-sizing: border-box;
    padding: 10px 20px;
    width: 300px;
    background-color: #f5f5f5;
    li{
      margin-top: 4px;
      margin-bottom: 10px;
      margin-left: 10px;
      font-size: 14px;
      h2{
        margin-bottom: 5px;
      }
      p{
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
  .right{
    box-sizing: border-box;
    margin-left: 20px;
    padding: 20px 10px;
    width: 780px;
    background-color: #fff;
    .help-tips{
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
      box-sizing: border-box;
      padding: 30px 80px;
      li{
        text-align: center;
        img{
          width: 90px;
          height: 90px;
          border-radius: 100px;
        }
        p{
          margin-top: 10px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>

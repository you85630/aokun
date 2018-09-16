<template>
  <div class="help">
    <bg-color>
      <search-box :selectBox="searchSelect" @on-search="search"></search-box>
    </bg-color>

    <bg-color>
      <div class="header">HELP</div>
      <div class="box">
        <div class="left">
          <ul>
            <li v-for="(li,index) in leftNav" :key="index"><router-link to="">{{li.name}}</router-link></li>
          </ul>
        </div>
        <div class="right">
          <div class="tips">
            <h2>翱坤帮助资源</h2>
          </div>
          <ul class="help-tips">
            <li v-for="(li,index) in helpTips" :key="index">
              <img :src="li.img" alt="">
              <p>{{li.name}}</p>
            </li>
          </ul>
          <ul class="issue-box">
            <li v-for="(li,index) in issueBox" :key="index">
              <div class="title" @click="li.show=!li.show"><Icon :type="li.show?'ios-remove':'ios-add'" />{{li.title}}</div>
              <div class="qbox" v-for="(i,val) in li.data" :key="val" v-if="li.show">
                <p class="title" @click="i.show=!i.show"><Icon :type="i.show?'ios-remove':'ios-add'" />{{i.title}}</p>
                <p class="content" v-if="i.show">{{i.desc}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </bg-color>
  </div>
</template>

<script>
import searchBox from 'components/common/search'

import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    searchBox
  },
  computed: {
    ...mapGetters([
      'searchSelect',
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
    },
    search (key) {
      sessionStorage.setItem('key', JSON.stringify(key))
      this.$router.push('/search')
    }
  },
  mounted () {
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
      margin-left: 10px;
      a{
        color: #316EC3;
        font-size: 14px;
      }
    }
  }
  .right{
    box-sizing: border-box;
    margin-left: 20px;
    padding: 20px 10px;
    width: 780px;
    background-color: #fff;
    .tips{
      color: #051520;
      h2{
        font-size: 18px;
      }
      p{
        margin-top: 10px;
        font-size: 14px;
      }
    }
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
    .issue-box{
      .title{
        padding: 4px 10px;
        background-color: #f5f5f5;
        font-size: 14px;
        cursor: pointer;
        i{
          margin-right: 4px;
          font-size: 18px;
        }
      }
      li{
        margin-bottom: 10px;
        border: 1px solid #eee;
        &:last-child{
          margin-bottom: 0;
        }
        .qbox{
          padding: 5px;
        }
        .content{
          padding: 4px;
          border: 1px solid #eee;
          border-top: none;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

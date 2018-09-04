<template>
  <div class="help">
    <bg-color>
      <search-box></search-box>
    </bg-color>

    <bg-color>
      <div class="box">
        <div class="left">
          <h2>HELP</h2>
          <ul>
            <li v-for="(li,index) in left" :key="index"><router-link to="">{{li.name}}</router-link></li>
          </ul>
        </div>
        <div class="right">
          <div class="tips">
            <h2>翱坤帮助资源</h2>
            <p>我需要帮助......</p>
          </div>
          <ul class="help-tips">
            <li v-for="(li,index) in helpTips" :key="index">
              <img :src="li.img" alt="">
              <p>{{li.name}}</p>
            </li>
          </ul>
          <div class="issue-box">
            <h2>经常问的问题：</h2>
            <ul v-for="(li,index) in issueBox" :key="index">
              <li class="title" @click="show(li)"><Icon :type="li.show?'ios-remove':'ios-add'" />{{li.title}}</li>
              <li v-for="(i,val) in li.issue" :key="val" v-if="li.show">
                <div class="title" @click="show(i)"><Icon :type="i.show?'ios-remove':'ios-add'" />{{i.title}}</div>
                <p v-if="i.show">{{i.content}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </bg-color>
  </div>
</template>

<script>
import searchBox from 'components/common/search'
export default {
  components: {
    searchBox
  },
  data () {
    return {
      left: [
        {
          link: '',
          name: '视频教程'
        }, {
          link: '',
          name: '用户指南'
        }, {
          link: '',
          name: '视频教程'
        }, {
          link: '',
          name: '用户指南'
        }, {
          link: '',
          name: '用户指南'
        }, {
          link: '',
          name: '视频教程'
        }, {
          link: '',
          name: '用户指南'
        }
      ],
      helpTips: [
        {
          name: '搜索',
          img: 'http://osc94pt0z.bkt.clouddn.com/icon-1.png'
        }, {
          name: '视频教程',
          img: 'http://osc94pt0z.bkt.clouddn.com/icon-1.png'
        }, {
          name: '用户指南',
          img: 'http://osc94pt0z.bkt.clouddn.com/icon-1.png'
        }
      ],
      issueBox: [
        {
          show: true,
          title: '内容',
          issue: [
            {
              show: false,
              title: '翱坤平台上有哪些内容？',
              content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
            }, {
              show: false,
              title: '翱坤平台上有哪些内容？',
              content: '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦'
            }
          ]
        }, {
          show: true,
          title: '内容',
          issue: [
            {
              show: false,
              title: '翱坤平台上有哪些内容？',
              content: '啦啦啦啦'
            }, {
              show: false,
              title: '翱坤平台上有哪些内容？',
              content: '啦啦啦啦'
            }
          ]
        }
      ]
    }
  },
  methods: {
    show (key) {
      key.show = !key.show
    }
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
    h2{
      font-size: 18px;
    }
    li{
      margin-top: 4px;
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
      padding: 0 80px;
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
      h2{
        font-size: 14px;
      }
      ul{
        margin-top: 10px;
        border: 1px solid #eee;
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
          padding: 5px 10px;
          .title{
            border: 1px solid #eee;
            border-bottom: none;
          }
          p{
            padding: 4px;
            border: 1px solid #eee;
            border-top: none;
            text-indent: 2em;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>

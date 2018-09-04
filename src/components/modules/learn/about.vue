<template>
  <div class="about">
    <h2>什么是翱坤数据库？</h2>
    <div class="box">
      <div class="left">
        <video :src="videoBox.video" v-if="videoBox.play"></video>
        <div class="play" v-else>
          <img :src="videoBox.cover" alt="">
          <Icon type="md-arrow-dropright-circle" />
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="(li,index) in aboutBox" :key="index">
            <h2>{{li.title}}</h2>
            <div class="item" v-for="(i,val) in li.box" :key="val">
              <div class="title"><Icon :type="i.icon" />{{i.name}}</div>
              <p>{{i.msg}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videoBox: {
        play: false,
        video: '',
        cover: 'http://pbsbjhfvy.bkt.clouddn.com/img-4.jpeg'
      },
      aboutBox: [
        {
          title: '数据库概述',
          box: [
            {
              icon: 'md-arrow-dropright-circle',
              name: '仪表板教程视频',
              msg: '数据库的仪表板需要个人登录。您的个人登录信息允许您通过保存搜索，创建项目文件夹，注释出版物等来自定义您的体验。'
            }
          ]
        }, {
          title: '数据库功能',
          box: [
            {
              icon: 'ios-create',
              name: '自定义注释',
              msg: '查看文档的在线版本并合并您自己的个人注释。'
            },
            {
              icon: 'ios-folder',
              name: '项目文件夹',
              msg: '创建无限的项目文件夹，并快速添加您喜欢的文档。'
            },
            {
              icon: 'ios-cloud-circle',
              name: '保存的搜索',
              msg: '保存您已执行的搜索(登陆后)，并使用已应用的过滤器，以便快速轻松地继续研究或查找符合您标准的新出版物。'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  margin-bottom: 30px;
  h2{
    font-size: 18px;
  }
}
.box{
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  .left{
    video{
      width: 640px;
      height: 373px;
    }
    .play{
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 640px;
      height: 373px;
      &::after{
        position: absolute;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: #000;
        content: '';
        opacity: .2;
      }
      img{
        width: 100%;
        height: 100%;
      }
      i{
        position: absolute;
        z-index: 2;
        color: #FFFFFF;
        font-size: 80px;
        cursor: pointer;
      }
    }
  }
  .right{
    margin-left: 35px;
    padding: 20px;
    width: 505px;
    background-color: #f5f5f5;
    ul{
      li{
        margin-bottom: 20px;
        &:last-child{
          margin-bottom: 0;
        }
        h2{
          font-size: 18px;
        }
        .item{
          margin-top: 10px;
          .title{
            display: flex;
            align-items: center;
            flex-direction: row;
            color: #316EC3;
            font-size: 14px;
            i{
              margin-right: 4px;
              font-size: 16px;
            }
          }
          p{
            margin-top: 6px;
            margin-left: 20px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>

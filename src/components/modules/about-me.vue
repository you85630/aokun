<template>
  <div class="about">
    <div class="box">
      <div class="left">
        <!-- <video :src="video.video" v-if="video.play"></video> -->
        <div class="video" v-if="video.play">
          <iframe frameborder="0" allowFullScreen="true" :src="video.video" ></iframe>
        </div>
        <div class="play" v-else>
          <img :src="video.cover" alt="">
          <Icon type="md-arrow-dropright-circle" @click="Play" />
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="(li,index) in list" :key="index">
            <h2>{{li.class_name}}</h2>
            <div class="item" v-for="(i,val) in li.data" :key="val">
              <div class="title"><Icon type="md-bookmark" />{{i.title}}</div>
              <p>{{i.desc}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list', 'video'],
  methods: {
    Play () {
      this.video.play = !this.video.play
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  .left{
    .video{
      width: 640px;
      height: 373px;
      iframe{
        width: 100%;
        height: 100%;
      }
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
      width: 100%;
      height: 373px;
      overflow-y: auto;
      li{
        margin-bottom: 20px;
        &:last-child{
          margin-bottom: 0;
        }
        h2{
          font-size: 16px;
        }
        .item{
          margin-top: 10px;
          .title{
            display: flex;
            align-items: center;
            flex-direction: row;
            color: #2d8cf0;
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

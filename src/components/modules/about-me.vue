<template>
  <div class="about" id="video">
    <div class="box">
      <div class="left">
          <video-player
                v-if="video.vurl"
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions()" />
          <div class="none-video" v-else></div>
      </div>
      <div class="right">
        <ul>
          <li v-for="(li,index) in list" :key="index">
            <h2>{{li.class_name}}</h2>
            <div class="item" v-for="(i,val) in li.data" :key="val">
              <div class="title" @click="linkTo(i)"><Icon type="md-bookmark" />{{i.title}}</div>
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
    linkTo (item) {
      if (!item.desc) {
        this.$router.push({path: '/learn/news', query: {id: item.id}})
      }
    },
    playerOptions () {
      let video = {
        autoplay: false,
        preload: 'auto',
        sources: [{
          type: 'video/mp4',
          src: this.video.vurl ? this.video.vurl : '' // url地址
        }],
        poster: this.video.vpic ? this.video.vpic : '' // 封面
      }
      return video
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  .left{
    width: 640px;
    height: 373px;
    .none-video{
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
  }
  .right{
    box-sizing: border-box;
    margin-left: 35px;
    padding: 20px;
    width: 505px;
    background-color: #f5f5f5;
    ul{
      overflow-y: auto;
      width: 100%;
      height: 373px;
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
            cursor: pointer;
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

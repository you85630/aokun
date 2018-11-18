<template>
  <div class="details">
    <bg-color v-if="start">
      <div class="intro btn-bg">
        <p><span>主题分类：</span>{{details.category_name}}</p>
        <div class="line">
          <p><span>办文单位：</span>{{details.company_name}}</p>
          <p><span>发文日期：</span>{{details.post_time}}</p>
        </div>
        <div class="line">
          <p><span>文号：</span>{{details.wenhao}}</p>
          <p><span>有效期：</span>{{details.status}}</p>
        </div>
        <p><span>名称：</span>{{details.title}}</p>
      </div>
    </bg-color>
    <div class="info" v-if="start">
      <h2>{{details.title}}</h2>
      <div class="infobox" v-html="details.contents"></div>
    </div>

    <div class="data-none" v-else>
      <p>暂无数据</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'details',
      'start'
    ])
  },
  created () {
    let id = this.$router.currentRoute.params.key
    this.getDetails(id)
  },
  methods: {
    ...mapActions([
      'getDetails'
    ])
  }
}
</script>

<style lang="scss" scoped>
.details{
  background-color: #fff;
}
.intro{
  margin: -20px;
  padding: 20px;
  p{
    font-size: 16px;
    line-height: 2;
    span{
      margin-right: 2px;
      font-weight: bold;
    }
  }
  .line{
    display: flex;
    flex-direction: row;
    p{
      &:last-child{
        margin-left: 20px;
      }
    }
  }
}
.info{
  padding: 20px 40px;
  padding-top: 0;
  h2{
    margin-bottom: 10px;
    text-align: center;
    font-size: 20px;
  }
}
.data-none{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 240px;
  color: #ccc;
  font-size: 16px;
}
</style>

<template>
  <div class="details">
    <bg-color>
      <div class="intro">
        <p><span>主题分类：</span>主题分类</p>
        <div class="line">
          <p><span>办文单位：</span>办文单位</p>
          <p><span>发文日期：</span>发文日期</p>
        </div>
        <div class="line">
          <p><span>文号：</span>文号</p>
          <p><span>有效期：</span>有效期</p>
        </div>
        <p><span>名称：</span>名称</p>
      </div>
    </bg-color>
    <div class="info">
      <h2>{{details.title}}</h2>
      <p>{{details.info}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      details: {
        title: '全国人民代表大会常务委员会关于修改《中华人民共和国会计法》等十一部法律的决定',
        info: '全国人民代表大会常务委员会关于修改《中华人民共和国会计法》等十一部法律的决定'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.intro{
  margin: -20px;
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
  margin-top: -10px;
  h2{
    font-size: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
  p{
    font-size: 16px;
  }
}
</style>

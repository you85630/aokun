<template>
  <div class="details">
    <bg-color>
      <div class="intro btn-bg">
        <p><span>名称：</span>{{details.title}}</p>
        <p><span>分类：</span>{{details.subject?details.subject:'暂无'}}</p>
        <div class="line">
          <p><span>大类别：</span>{{details.bigCatagoryName?details.bigCatagoryName:'暂无'}}</p>
          <p><span>小类别：</span>{{details.subCatagoryName?details.subCatagoryName:'暂无'}}</p>
        </div>
        <div class="line">
          <p><span>办文单位：</span>{{details.company_name?details.company_name:'暂无'}}</p>
          <p><span>发文日期：</span>{{details.time}}</p>
        </div>
        <div class="line">
          <p><span>文号：</span>{{details.wenhao?details.wenhao:'暂无'}}</p>
          <p><span>有效期：</span>{{details.status===1?'有效期':'其他'}}</p>
        </div>
      </div>
    </bg-color>
    <div class="info">
      <iframe id="iframeId" frameborder="no" border="0" :src="details.uri"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      details: JSON.parse(sessionStorage.getItem('item'))
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const oIframe = document.getElementById('iframeId')
      const deviceHeight = document.documentElement.clientHeight
      oIframe.style.minHeight = deviceHeight + 'px'
    }
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
  font-size: 14px;
  iframe{
    width: 100%;
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

<template>
  <div class="details">
    <bg-color>
      <div class="intro">
        <Row type="flex" justify="space-between" align="middle">
           <Col>
            <p><span>名称：</span>{{details.title}}</p>
          </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
           <Col span="10">
              <p><span>SUBJECT：</span>{{details.subject?details.subject:'暂无'}}</p>
          </Col>
           <Col span="10" offset="2">
              <p><span>办文单位：</span>{{details.company_name?details.company_name:'暂无'}}</p>
          </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
           <Col span="10">
           <p><span>大分类：</span>{{details.bigCatagoryName?details.bigCatagoryName:'暂无'}}</p>
          </Col>
          <Col span="10" offset="2">
            <p><span>小分类：</span>{{details.subCatagoryName?details.subCatagoryName:'暂无'}}</p>
          </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
           <Col span="10">
            <p><span>发文日期：</span>{{details.time?details.time:'暂无'}}</p>
          </Col>
          <Col span="10" offset="2">
            <p><span>结束日期：</span>{{details.etime?details.etime:'暂无'}}</p>
          </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
           <Col span="10">
            <p><span>章节号：</span>{{details.section?details.section:'暂无'}}</p>
          </Col>
          <Col span="10" offset="2">
            <p><span>AMDT：</span>{{details.amdt?details.amdt:'暂无'}}</p>
          </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
           <Col span="10">
            <p><span>文号：</span>{{details.wenhao?details.wenhao:'暂无'}}</p>
          </Col>
          <Col span="10" offset="2">
            <p><span>有效期：</span>{{details.status===1?'有效期':'其他'}}</p>
          </Col>
        </Row>
      </div>
    </bg-color>
    <div class="info" id="info">
      <iframe frameborder="no" border="0" :src="details.uri"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      details: JSON.parse(sessionStorage.getItem('item')) ? JSON.parse(sessionStorage.getItem('item')) : {}
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let windHei = window.outerHeight
      document.getElementById('info').style.height = windHei + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.details{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.intro{
  margin: -16px;
  padding: 16px;
  background-color: #2d8cf0;
  color: #fff;
  p{
    font-size: 14px;
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
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  iframe{
    width: 100%;
    height: 100%;
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

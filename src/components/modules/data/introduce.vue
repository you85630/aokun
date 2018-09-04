<template>
  <div class="introduce">
    <div class="left">
      <h2>翱坤数据库知识中心</h2>
      <p>欢迎来到翱坤数据库知识中心！</p>
      <p>欢迎来到由MOBILUS用户构思并构建的翱坤数据库知识中心。</p>
      <p>您告诉我们您需要一个全面，权威的信息和资源来源。</p>
      <p>我们听了。</p>
      <p>翱坤数据库知识中心提供您需要了解的有关新兴移动技术的所有信息。它们是最佳行业资源，培训和当前新闻的接入点。</p>
      <ul>
        <li>从业务主管和技术思想领袖那里获得见解</li>
        <li>一旦发布，就随时了解监管更新和标准</li>
        <li>探索即将举办的活动以及其他网络和协作机会</li>
      </ul>
      <p>现在就开始。浏览质量，免费内容或通过SAE MOBILUS订阅扩展您的访问权限。 <router-link to="">单击此处</router-link>以建议未来的知识中心</p>
    </div>
    <div class="right">
      <router-link to="">了解关于翱坤数据库的更多信息</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.introduce{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: -20px;
  .left{
    width: 74%;
    color:#fff;
    font-size: 14px;
    h2{
      font-size: 24px;
      font-weight: normal;
      margin-bottom: 20px;
    }
    p{
      margin-top: 10px;
    }
    ul{
      padding-left: 30px;
      margin: 20px 0;
      li{
        list-style: disc;
        margin-top: 10px;
      }
    }
    a{
      color: #316EC3;
    }
  }
  .right{
    a{
      font-size: 14px;
      color: #316EC3;
      background-color: #fff;
      padding: 10px 20px;
      border: none;
    }
  }
}
</style>

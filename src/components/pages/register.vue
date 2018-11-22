<template>
  <div class="register-box">
      <div class="register">
        <h2>注册</h2>
        <bg-color>
          <div class="form">
            <ul>
              <li>
                <div class="title">昵称：</div>
                <p><Input size="large" v-model="register.tel" placeholder="真实姓名或常用昵称" /></p>
              </li>
              <li>
                <div class="title">手机号：</div>
                <p><Input size="large" v-model="register.pasw" placeholder="真实姓名或常用昵称" /></p>
              </li>
              <li>
                <div class="title">密码：</div>
                <p><Input size="large" v-model="register.paswt" placeholder="不少于6位的密码" /></p>
              </li>
              <li>
                <p class="center"><Button size="large" type="primary">&nbsp;&nbsp;注册&nbsp;&nbsp;</Button></p>
              </li>
            </ul>
          </div>
        </bg-color>
        <div class="or">- OR -</div>
        <div class="login">
          <router-link to="/login">
            <Button size="large" type="primary">&nbsp;&nbsp;已有账号登陆&nbsp;&nbsp;</Button>
          </router-link>
          <p>注册即表示你同意网站的《<span @click="visible=true">服务条款</span>》</p>
        </div>
      </div>
      <Row type="flex" justify="start">
        <Col span="24">
          <Modal footer-hide v-model="visible" title="服务条款">
              <div class="clause">
                <p v-for="li in 60" :key="li">这里是文字这里是文字这里是文字这里是文字这里是文字这里是文字</p>
              </div>
          </Modal>
        </Col>
      </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      register: {
        tel: '',
        pasw: '',
        paswt: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register{
  margin: 0 auto;
  width: 780px;
  color: #051520;
  text-align: center;
  h2{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    width: 100%;
    font-weight: normal;
    font-size: 24px;
  }
  .form{
    padding: 20px;
    background-color: #fff;
    ul{
      li{
        margin: 0 auto;
        margin-bottom: 20px;
        width: 550px;
        text-align: left;
        .title{
          margin-bottom: 6px;
          font-size: 16px;
        }
      }
      .center{
        text-align: center;
      }
    }
  }
  .or{
    margin: 30px 0;
    font-size: 24px;
  }
  .login{
    padding-bottom: 30px;
    text-align: center;
    p{
      margin-top: 30px;
      font-size: 14px;
      span{
        margin:0 4px;
        padding: 0;
        background: none;
        color:#2d8cf0;
        cursor: pointer;
      }
    }
  }
}
.clause{
  height: 60vh;
  overflow-y: auto;
}
</style>

<template>
  <div class="register-box">
      <div class="register">
        <h2>注册</h2>
        <bg-color>
          <div class="form">
            <ul>
              <li>
                <div class="title">昵称：</div>
                <p><input type="text" placeholder="真实姓名或常用昵称"></p>
              </li>
              <li>
                <div class="title">手机号：</div>
                <p><input type="text" placeholder="11位手机号"></p>
              </li>
              <li>
                <div class="title">密码：</div>
                <p><input type="text" placeholder="不少于6位的密码"></p>
              </li>
              <li>
                <p><button class="btn-bg">注册</button></p>
              </li>
            </ul>
          </div>
        </bg-color>
        <div class="or">- OR -</div>
        <div class="login">
          <router-link to="/learn" class="btn-bg">已有账号登陆</router-link>
          <p>注册即表示你同意网站的《<router-link to="">服务条款</router-link>》</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.register{
  margin: 0 auto;
  width: 780px;
  color: #051520;
  text-align: center;
  button,
  a{
    display: inline-block;
    padding: 10px 40px;
    border: none;
    border-radius: 2px;
    font-size: 14px;
  }
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
          margin-bottom: 4px;
          font-size: 18px;
        }
        p{
          text-align: center;
          input{
            box-sizing: border-box;
            padding: 0 10px;
            width: 100%;
            height: 45px;
            border: 1px solid #eee;
            border-radius: 2px;
            font-size: 14px;
          }
        }
      }
    }
  }
  .or{
    margin: 40px 0;
    font-size: 24px;
  }
  .login{
    padding-bottom: 40px;
    p{
      margin-top: 20px;
      font-size: 14px;
      a{
        margin:0 4px;
        padding: 0;
        background: none;
        color:#316EC3;
      }
    }
  }
}
</style>

<template>
<div v-if="User">
    <div class="login-aokun-box" v-if="!User.name">
      <div class="msg-box">
        <p>没有翱坤数据库帐户？注册是免费的，让您有机会根据您的独特需求定制翱坤数据库平台。创建个人项目文件夹，最喜欢的出版物以便快速访问，进行个人注释等等。立即注册！</p>
      </div>
      <div class="box-aokun">
        <div class="left-box">
          <h2>已经注册？请登录：</h2>
          <ul>
            <li>
              <span>手机号：</span>
              <div><Input v-model="user.tel" placeholder="请输入手机号" /></div>
            </li>
            <li>
              <span>密码：</span>
              <div><Input type="password" v-model="user.pwd" placeholder="请输入密码" /></div>
            </li>
            <li>
              <span></span>
              <div>
                <p @click="user.select=!user.select" :class="{active:user.select}">
                  <Icon :type="user.select?'ios-checkbox':'ios-square'" />记住我
                </p>
                <Button type="primary" @click="login(user)">&nbsp;登录&nbsp;</Button>
              </div>
            </li>
            <li>
              <span></span>
              <p><router-link to="/forget">忘记密码？</router-link></p>
            </li>
          </ul>
        </div>
        <div class="middle">- OR -</div>
        <div class="right">
          <h2>免费注册翱坤数据库账户</h2>
          <router-link to="/register">
            <Button type="primary">&nbsp;&nbsp;注册&nbsp;&nbsp;</Button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="user-aokun-box" v-else>
      <p>尊敬的<span>{{User.name}}</span></p>
      <div v-html="loginInfoMsg"></div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      user: {
        tel: '',
        pwd: '',
        select: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'User',
      'loginInfoMsg'
    ])
  },
  methods: {
    login (key) {
      this.$emit('on-login', key)
      this.user = {
        tel: '',
        pwd: '',
        select: false
      }
    }
  },
  created () {
    let remember = JSON.parse(localStorage.getItem('AOKUN-REMEMBER'))
    if (remember) {
      this.user = remember
    }
  }
}
</script>

<style lang="scss">
.login-aokun-box{
  .msg-box{
    p{
      font-size: 14px;
    }
  }
  .box-aokun{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    h2{
      font-size: 14px;
    }
  }
  .middle{
    margin: 0 10px;
    font-size: 18px;
  }
  .left-box{
    ul{
      margin-left: 20px;
      li{
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-top: 20px;
        span{
          width: 90px;
          text-align: left;
          font-size: 14px;
        }
        div{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 240px;
          input{
            box-sizing: border-box;
            padding: 0 10px;
            width: 100%;
            height: 30px;
            border: none;
            background-color: #eee;
            font-size: 14px;
          }
          p{
            display: flex;
            align-items: center;
            flex-direction: row;
            cursor: pointer;

            user-select: none;
            i{
              margin-top: -2px;
              margin-right: 4px;
              color: #ccc;
              font-size: 16px;
            }
          }
          a{
            font-size: 14px;
          }
        }
        .active{
          color: #2d8cf0;
          i{
            color: #2d8cf0;
          }
        }
      }
    }
  }
  .right{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 300px;
    height: 207px;
    text-align: center;
    h2{
      margin-bottom: 20px;
    }
  }
}
.user-aokun-box{
  p{
    font-size: 14px;
    line-height: 2;
    span{
      font-weight: bold;
    }
  }
}
</style>

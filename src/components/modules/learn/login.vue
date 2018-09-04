<template>
  <div class="login">
    <div class="msg">
      <h2>翱坤数据库</h2>
      <p>没有翱坤数据库帐户？注册是免费的，让您有机会根据您的独特需求定制翱坤数据库平台。创建个人项目文件夹，最喜欢的出版物以便快速访问，进行个人注释等等。立即注册！</p>
    </div>
    <div class="box">
      <div class="left">
        <h2>已经注册？请登录：</h2>
        <ul>
          <li>
            <span>手机号：</span>
            <p><input type="text" ></p>
          </li>
          <li>
            <span>密码：</span>
            <p><input type="text" ></p>
          </li>
          <li>
            <span></span>
            <p>
              <span @click="select=!select" :class="{active:select}"><Icon :type="select?'ios-checkbox':'ios-square'" />记住我</span>
              <button>登陆</button>
            </p>
          </li>
          <li>
            <span></span>
            <p><router-link to="">忘记密码？</router-link></p>
          </li>
        </ul>
      </div>
      <div class="middle">- OR -</div>
      <div class="right">
        <h2>免费注册翱坤数据库账户</h2>
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: false
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  margin: -20px;
  .msg{
    color:#fff;
    h2{
      font-size: 18px;
    }
    p{
      margin-top: 10px;
      font-size: 14px;
    }
  }
  .box{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
    h2{
      color: #08151F;
      font-size: 14px;
    }
  }
}
.middle{
  margin: 0 10px;
  color: #08151F;
  font-size: 18px;
}
.left{
  ul{
    margin-left: 20px;
    li{
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-top: 20px;
      span{
        width: 100px;
        color: #fff;
        text-align: left;
        font-size: 14px;
      }
      p{
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
          background-color: #fff;
          font-size: 14px;
        }
        button{
          padding: 2px 20px;
          border: none;
          background-color: #316EC3;
          color: #fff;
          font-size: 14px;
        }
        span{
          display: flex;
          align-items: center;
          cursor: pointer;

          user-select: none;
          i{
            margin-right: 4px;
            font-size: 18px;
          }
        }
        a{
          color: #316EC3;
          font-size: 14px;
        }
      }
      .active{
        color: #316EC3;
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
  a{
    margin-top: 30px;
    padding: 4px 30px;
    background-color: #316EC3;
    color: #fff;
    font-size: 14px;
  }
}
</style>

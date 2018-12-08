<template>
  <div class="register-box">
      <div class="register">
        <h2>注册</h2>
        <bg-color>
          <div class="form-box">
            <Form ref="user" :model="user" :rules="userForm">
              <FormItem prop="name">
                <div class="title">昵称：</div>
                <Input type="text" v-model="user.name" placeholder="请输入不少于4位的昵称" />
              </FormItem>
              <FormItem>
                <div class="title">单位：</div>
                <Input type="text" v-model="user.unit" placeholder="请输入单位" />
              </FormItem>
              <FormItem>
                <div class="title">职务：</div>
                <Input type="text" v-model="user.position" placeholder="请输入职务" />
              </FormItem>
              <FormItem prop="pwd">
                <div class="title">密码：</div>
                <Input type="password" v-model="user.pwd" placeholder="请输入不少于6位的密码" />
              </FormItem>
              <FormItem prop="tel">
                <div class="title">手机号：</div>
                <div class="tel-box">
                  <Input type="text" v-model="user.tel" placeholder="请输入手机号码" />
                  <Button type="primary" :disabled="user.tel.length!==11" @click="getCodes(user.tel)">获取验证码</Button>
                </div>
              </FormItem>
              <FormItem prop="code" v-if="code">
                <div class="title">验证码：</div>
                <Input type="text" v-model="user.code" placeholder="请输入验证码" />
              </FormItem>
              <FormItem>
                <Button size="large" type="primary" @click="register('user')">&nbsp;&nbsp;注册&nbsp;&nbsp;</Button>
              </FormItem>
            </Form>
          </div>
        </bg-color>
        <div class="login">
          <div class="or">- OR -</div>
          <router-link to="/login">
            <Button size="large" type="primary">&nbsp;&nbsp;已有账号登陆&nbsp;&nbsp;</Button>
          </router-link>
          <!-- <p>注册即表示你同意网站的《<span @click="visible=true">服务条款</span>》</p> -->
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
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      visible: false,
      code: false,
      user: {
        name: '',
        unit: '',
        position: '',
        pwd: '',
        tel: '',
        code: ''
      },
      userForm: {
        name: [
          { required: true, message: '请输入不少于4位的昵称', trigger: 'blur' },
          { type: 'string', min: 4, message: '请输入不少于4位的昵称', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入不少于6位的密码', trigger: 'blur' },
          { type: 'string', min: 6, message: '请输入不少于6位的密码', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入不少于11位的手机号码', trigger: 'blur' },
          { type: 'string', min: 11, message: '请输入不少于11位的手机号码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { type: 'string', min: 4, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'Message'
    ])
  },
  methods: {
    ...mapActions([
      'getCode',
      'getRegister'
    ]),
    // 获取验证码
    getCodes (tel) {
      this.code = true
      this.getCode(tel)
      setTimeout(() => {
        if (this.Message.status) {
          this.$Message.success('已发送至手机，请注意查收')
        } else {
          this.$Message.error(this.Message.msg)
        }
      }, 200)
    },
    // 注册
    register (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.getRegister(this.user)
          setTimeout(() => {
            if (this.Message.status) {
              this.$Message.success('注册成功，即将跳转至登录页')
              setTimeout(() => {
                this.$router.push('/login')
              }, 2000)
            } else {
              this.$Message.error(this.Message.msg)
            }
          }, 200)
        }
      })
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
    padding-bottom: 20px;
    width: 100%;
    font-weight: normal;
    font-size: 24px;
  }
  .form-box{
    padding: 0 20%;
    padding-top: 24px;
    .title{
      text-align: left;
      margin-bottom: 4px;
      font-size: 14px;
    }
    .tel-box{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .ivu-input-wrapper{
        width: 70%;
      }
    }
  }
  .login{
    padding-bottom: 30px;
    text-align: center;
    .or{
      margin: 30px 0;
      font-size: 24px;
    }
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

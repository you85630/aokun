<template>
  <div class="forget">
    <bg-color>
      <div class="steps-box">
        <Steps :current="current">
          <Step v-for="(li,index) in stepList" :key="index" :title="li"></Step>
        </Steps>
      </div>
      <div class="forget-box">
        <Form ref="forget" :model="forget" :rules="forgetForm">
          <FormItem prop="tel" v-if="current===0">
            <div class="title">请输入手机号码：</div>
            <Input type="text" v-model="forget.tel" placeholder="请输入手机号码" />
          </FormItem>
          <FormItem prop="code" v-if="current===1">
            <div class="title">请输入验证码：</div>
            <Input type="text" v-model="forget.code" placeholder="请输入验证码" />
          </FormItem>
          <FormItem prop="pwd" v-if="current===2">
            <div class="title">请输入不少于6位的新密码：</div>
            <Input type="password" v-model="forget.pwd" placeholder="请输入不少于6位的新密码" />
          </FormItem>
        </Form>
        <div class="btn-box" v-if="current<3">
          <Button type="primary" @click="prev" v-if="show">上一步</Button>
          <Button type="primary" @click="next" :disabled="nowShow">{{headline}}</Button>
        </div>
        <div class="over" v-if="current>=3">修改成功，即将跳转至登录页</div>
      </div>
    </bg-color>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      show: false,
      current: 0,
      headline: '获取验证码',
      stepList: ['步骤1', '步骤2', '步骤3'],
      forget: {
        tel: '',
        code: '',
        pwd: ''
      },
      forgetForm: {
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
      'alertMsg'
    ]),
    nowShow: function () {
      let now = true
      if (this.forget.tel.length === 11) {
        now = false
      }
      if (this.forget.code.length === 4) {
        now = false
      }
      if (this.forget.pwd !== '') {
        now = false
      }
      return now
    }
  },
  methods: {
    ...mapActions([
      'getForget',
      'getPwd'
    ]),
    next () {
      this.current += 1
      if (this.current === 1) {
        this.headline = '下一步'
        this.show = true
        if (this.forget.tel !== '') {
          this.getForget(this.forget)
          setTimeout(() => {
            if (this.alertMsg.status) {
              this.$Message.success('已发送至手机，请注意查收')
            } else {
              this.$Message.error(this.alertMsg.msg)
            }
          }, 200)
        }
      }
      if (this.current === 2) {
        this.headline = '修改'
        this.show = true
      }
      if (this.current === 3) {
        if (this.forget.pwd !== '') {
          this.getPwd(this.forget)
          setTimeout(() => {
            if (this.alertMsg.status) {
              this.$Message.success('修改成功，即将跳转至登录页')
              setTimeout(() => {
                this.$router.push('/login')
              }, 2000)
            } else {
              this.$Message.error(this.alertMsg.msg)
            }
          }, 200)
        }
      }
    },
    prev () {
      this.current -= 1
      if (this.current === 0) {
        this.show = false
        this.headline = '获取验证码'
      } else if (this.current === 1) {
        this.headline = '下一步'
        this.show = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.forget{
  margin: 0 auto;
  width: 780px;
  color: #051520;
  .steps-box{
    padding: 40px 0;
    margin-left: 130px;
  }
  .forget-box{
    padding: 40px 30%;
  }
  .btn-box{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .over{
    font-size: 14px;
    text-align: center;
    color: #19be6b;
  }
}
</style>

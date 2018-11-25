import api from 'assets/js/api'

export default {
  state: {
    status: true,
    Message: {},
    User: {}
  },
  getters: {
    status: state => state.status,
    Message: state => state.Message,
    User: state => state.User
  },
  actions: {
    // 获取验证码
    getCode: ({ commit }, key) => {
      let URL = '/code/' + key
      api.get(URL).then((res) => {
        commit('getCode', res.data)
      })
    },
    // 注册
    getRegister: ({ commit }, key) => {
      let URL = '/register' +
        '/' + key.tel +
        '/' + key.name +
        '/' + key.pwd +
        '/' + key.code

      api.get(URL).then((res) => {
        commit('getRegister', res.data)
      })
    },
    // 登录
    login: ({ commit }, key) => {
      let URL = '/login' +
        '/' + key.tel +
        '/' + key.pwd

      api.get(URL).then((res) => {
        commit('login', res.data)
      })
    },
    // 退出
    exit: ({ commit }) => {
      commit('exit')
    }
  },
  mutations: {
    // 获取验证码
    getCode: (state, key) => {
      if (key.result === 'success') {
        state.Message.status = true
      } else {
        state.Message.status = false
        state.Message.msg = '手机号码错误'
      }
    },
    // 注册
    getRegister: (state, key) => {
      switch (key.result) {
        case 'code error':
          state.Message.status = false
          state.Message.msg = '验证码错误'
          break
        case 'tel error':
          state.Message.status = false
          state.Message.msg = '手机号码错误'
          break
        default:
          state.Message.status = true
      }
    },
    // 登录
    login: (state, key) => {
      if (key) {
        state.User = key
        sessionStorage.setItem('User', JSON.stringify(key))
      }
    },
    // 退出
    exit: (state, key) => {
      state.User = {}
      sessionStorage.removeItem('User')
    }
  }
}

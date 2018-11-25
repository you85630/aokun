import api from 'assets/js/api'

export default {
  state: {
    alertMsg: {}
  },
  getters: {
    alertMsg: state => state.alertMsg
  },
  actions: {
    getForget: ({ commit }, key) => {
      let URL = '/forget' +
      '/' + key.tel
      api.get(URL).then((res) => {
        commit('getForget', res.data)
      })
    },
    getPwd: ({ commit }, key) => {
      let URL = '/pwd' +
      '/' + key.tel +
      '/' + key.pwd +
      '/' + key.code
      api.get(URL).then((res) => {
        commit('getPwd', res.data)
      })
    }
  },
  mutations: {
    getForget: (state, key) => {
      if (key.result === 'tel error') {
        state.alertMsg.status = false
        state.alertMsg.msg = '手机号码错误'
      } else {
        state.alertMsg.status = true
      }
    },
    getPwd: (state, key) => {
      if (key.result === 'tel error') {
        state.alertMsg.status = false
        state.alertMsg.msg = '手机号码错误'
      } else if (key.result === 'code error') {
        state.alertMsg.status = false
        state.alertMsg.msg = '验证码错误'
      } else if (key.result === 'status error') {
        state.alertMsg.status = false
        state.alertMsg.msg = '状态错误'
      } else {
        state.alertMsg.status = true
      }
    }
  }
}

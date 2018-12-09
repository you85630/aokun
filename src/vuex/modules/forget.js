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
      state.alertMsg = {}
      state.alertMsg = key
    },
    getPwd: (state, key) => {
      state.alertMsg = {}
      state.alertMsg = key
    }
  }
}

import api from 'assets/js/api'

export default {
  state: {
    details: {},
    start: true
  },
  getters: {
    details: state => state.details
  },
  actions: {
    getDetails: ({ commit }, key) => {
      let URL = '/ddetail/' + key
      api.get(URL).then((res) => {
        commit('getDetails', res.data)
      })
    }
  },
  mutations: {
    getDetails: (state, key) => {
      if (key.length) {
        state.details = key[0]
        let date = new Date(key[0].post_time * 1000)
        let Y = date.getFullYear() + '-'
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        let D = date.getDate() + ' '
        state.details.post_time = Y + M + D
        state.details.status = key[0].status === 1 ? '有效期' : '无效期'
      } else {
        state.start = false
      }
    },
    timestampToTime (timestamp) {
      let date = new Date(timestamp * 1000)
      let Y = date.getFullYear() + '-'
      let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
      let D = date.getDate() + ' '
      return Y + M + D
    }
  }
}

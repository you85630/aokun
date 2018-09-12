import api from 'assets/js/api'

export default {
  state: {
    shzlList: []
  },
  getters: {
    shzlList: state => state.shzlList
  },
  actions: {
    getShzl: ({ commit }, key) => {
      let URL = '/shzl/' + key
      api.get(URL).then((res) => {
        commit('getShzl', res.data)
      })
    }
  },
  mutations: {
    getShzl: (state, key) => {
      state.shzlList = key
      for (const key in state.shzlList) {
        if (state.shzlList.hasOwnProperty(key)) {
          const e = state.shzlList[key]
          e.time = this.a.mutations.timestampToTime(e.date)
          let list = JSON.parse(e.ck_titile)
          for (const i in list) {
            if (list.hasOwnProperty(i)) {
              const n = list[i]
              e.pdf = {
                name: i,
                link: n
              }
            }
          }
        }
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

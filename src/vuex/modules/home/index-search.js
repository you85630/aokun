import api from 'assets/js/api'

export default {
  state: {
    searchkey: {
      slogan: '移动工程资源的目的地',
      num: 207000,
      nowkey: ''
    }
  },
  getters: {
    searchkey: state => state.searchkey
  },
  actions: {
    search: ({ commit }, key) => {
      let nowData
      let URL = ''
      let data = {

      }
      api.post(URL, data).then((res) => {
        console.log(res)
        commit('search', nowData)
      })
    }
  },
  mutations: {
    search: (state, key) => {

    }
  }
}

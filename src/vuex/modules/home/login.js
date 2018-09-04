import api from 'assets/js/api'

export default {
  state: {

  },
  getters: {

  },
  actions: {
    login: ({ commit }, key) => {
      let nowData
      let URL = ''
      let data = {

      }
      api.post(URL, data).then((res) => {
        console.log(res)
        commit('login', nowData)
      })
    }
  },
  mutations: {
    login: (state, key) => {

    }
  }
}

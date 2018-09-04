import api from 'assets/js/api'

export default {
  state: {

  },
  getters: {

  },
  actions: {
    getCarousel: ({ commit }, key) => {
      let nowData
      let URL = ''
      let data = {

      }
      api.post(URL, data).then((res) => {
        console.log(res)
        commit('getCarousel', nowData)
      })
    }
  },
  mutations: {
    getCarousel: (state, key) => {

    }
  }
}

import api from 'assets/js/api'

export default {
  state: {
    news: {}
  },
  getters: {
    news: state => state.news
  },
  actions: {
    getNews: ({ commit }, key) => {
      let URL = '/news/' + key
      api.get(URL).then((res) => {
        commit('getNews', res.data)
      })
    }
  },
  mutations: {
    getNews: (state, key) => {
      if (key) {
        state.news = key[0]
      }
    }
  }
}

import api from 'assets/js/api'

export default {
  state: {
    dataItemList: []
  },
  getters: {
    dataItemList: state => state.dataItemList
  },
  actions: {
    getItemList: ({ commit }, key) => {
      let URL = '/dall'
      api.get(URL).then((res) => {
        commit('getItemList', res.data)
      })
    }
  },
  mutations: {
    getItemList: (state, key) => {
      state.dataItemList = key
    }
  }
}

import api from 'assets/js/api'

export default {
  state: {
    dataItemList: [],
    introduceData: ''
  },
  getters: {
    dataItemList: state => state.dataItemList,
    introduceData: state => state.introduceData
  },
  actions: {
    getItemList: ({ commit }, key) => {
      let URL = '/dall'
      api.get(URL).then((res) => {
        commit('getItemList', res.data)
      })
    },
    getIntroduce: ({ commit }, key) => {
      let URL = '/linfo'
      api.get(URL).then((res) => {
        commit('getIntroduce', res.data)
      })
    }
  },
  mutations: {
    getItemList: (state, key) => {
      state.dataItemList = key
    },
    getIntroduce: (state, key) => {
      state.introduceData = key
    }
  }
}

import api from 'assets/js/api'

export default {
  state: {
    searchSelect: []
  },
  getters: {
    searchSelect: state => state.searchSelect
  },
  actions: {
    // 分类
    getCompany: ({ commit }, key) => {
      let URL = '/company'
      api.get(URL).then((res) => {
        commit('getCompany', res.data)
      })
    },
    // 搜索
    searchData: ({ commit }, key) => {
      // page：第几页：没有的填0
      // categry：分类id:没有的填-1
      // title:标题搜索：没有的填-1
      // content：内容搜索：没有填-1
      // wenhao：文号苏索：没有填-1
      // company：发文单位Id:没有-1
      // startTime/endTime：发文开始结束日期
      let URL = '/serach'
      let data = {
        page: key.page,
        categry: key.categry,
        title: key.key,
        content: key.key,
        wenhao: key.number,
        company: key.selectid,
        startTime: key.stime,
        endTime: key.etime
      }
      api.post(URL, data).then((res) => {
        commit('searchData', res.data)
      })
    }
  },
  mutations: {
    getCompany: (state, key) => {
      for (const e in key) {
        if (key.hasOwnProperty(e)) {
          const element = key[e]
          state.searchSelect.push(element)
        }
      }
    },
    // 搜索
    searchData: (state, key) => {
      console.log(key)
    }
  }
}

import api from 'assets/js/api'

export default {
  state: {
    searchSelect: [],
    itemList: []
  },
  getters: {
    searchSelect: state => state.searchSelect,
    itemList: state => state.itemList
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
      if (data.categry === '') {
        data.categry = -1
      }
      if (data.title === '') {
        data.title = -1
      }
      if (data.content === '') {
        data.content = -1
      }
      if (data.wenhao === '') {
        data.wenhao = -1
      }
      if (data.company === '') {
        data.company = -1
      }
      if (data.startTime === '') {
        data.startTime = -1
      }
      if (data.endTime === '') {
        data.endTime = -1
      }
      let URL = '/serach/' + data.page + '/' + data.categry + '/' + data.title + '/' + data.content + '/' + data.wenhao + '/' + data.company + '/' + data.startTime + '/' + data.endTime
      api.get(URL).then((res) => {
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
      state.itemList = []
      let list = key
      for (const e in list) {
        if (list.hasOwnProperty(e)) {
          const element = list[e]
          let time = this.a.mutations.timestampToTime(element.post_time)
          state.itemList.push({
            name: element.title,
            number: element.wenhao,
            time: time,
            key: element.id
          })
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

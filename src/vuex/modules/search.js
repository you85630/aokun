import api from 'assets/js/api'

export default {
  state: {
    searchSelect: [],
    itemList: [
      {
        name: '全国人民代表大会常务委员会关于修改《中华人民共和国会计法》等十一部法律的决定',
        number: '中华人民共和国主席令第81号',
        time: '2017年11月04日',
        key: 1
      }, {
        name: '全国人民代表大会常务委员会关于修改《中华人民共和国会计法》等十一部法律的决定',
        number: '中华人民共和国主席令第81号',
        time: '2017年11月04日',
        key: 2
      }
    ]
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
      console.log(key)
    }
  }
}

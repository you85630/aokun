import api from 'assets/js/api'

export default {
  state: {
    contoryList: [],
    cdetailList: {}
  },
  getters: {
    contoryList: state => state.contoryList,
    cdetailList: state => state.cdetailList
  },
  actions: {
    getContory: ({ commit }, key) => {
      let URL = '/contory'
      api.get(URL).then((res) => {
        commit('getContory', res.data)
      })
    },
    getCdetail: ({ commit }, key) => {
      let URL = '/cdetail/' + key
      api.get(URL).then((res) => {
        commit('getCdetail', res.data)
      })
    }
  },
  mutations: {
    getContory: (state, key) => {
      let map = {}
      let list = []
      for (const k in key) {
        if (key.hasOwnProperty(k)) {
          const e = key[k]
          if (!map[e.area_id]) {
            list.push({
              area_id: e.area_id,
              areaName: e.areaName,
              data: [e],
              open: false
            })
            map[e.area_id] = e
          } else {
            for (var j = 0; j < list.length; j++) {
              var dj = list[j]
              if (dj.area_id === e.area_id) {
                dj.data.push(e)
                break
              }
            }
          }
        }
      }
      list[0].open = true
      state.contoryList = list
    },
    getCdetail: (state, key) => {
      let list = key[0]
      let now = []
      let pdf = []
      let nowlist = JSON.parse(list.pdfs)
      for (const i in nowlist) {
        if (nowlist.hasOwnProperty(i)) {
          const element = nowlist[i]
          now.push(element)
        }
      }
      for (const n in now[0]) {
        if (now[0].hasOwnProperty(n)) {
          const element = now[0][n]
          pdf.push({
            name: n,
            link: element
          })
        }
      }
      state.cdetailList = list
      state.cdetailList.pdflist = pdf
    }
  }
}

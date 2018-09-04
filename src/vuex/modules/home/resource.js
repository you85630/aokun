import api from 'assets/js/api'

export default {
  state: {
    linklist: []
  },
  getters: {
    linklist: state => state.linklist
  },
  actions: {
    getResource: ({ commit }, key) => {
      let nowData
      let URL = '/category'
      api.get(URL).then((res) => {
        nowData = res.data
        commit('getResource', nowData)
      })
    }
  },
  mutations: {
    getResource: (state, key) => {
      let list = []
      for (const k in key) {
        if (key.hasOwnProperty(k)) {
          const element = key[k]
          if (k === '0') {
            for (let i = 0; i < element.length; i++) {
              const e = element[i]
              list.push({
                name: e.name,
                id: e.id,
                item: []
              })
            }
          } else {
            for (let i = 0; i < element.length; i++) {
              const e = element[i]
              for (let j = 0; j < list.length; j++) {
                const s = list[j]
                if (e.parent_id === s.id) {
                  s.item.push({
                    name: e.name,
                    id: e.parent_id,
                    link: '' // 这里缺少链接
                  })
                }
              }
            }
          }
        }
      }
      state.linklist = list
    }
  }
}

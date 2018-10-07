import api from 'assets/js/api'

export default {
  state: {
    searchkey: {
      slogan: '',
      num: 0,
      bgimg: ''
    },
    imgList: [],
    linklist: []
  },
  getters: {
    searchkey: state => state.searchkey,
    imgList: state => state.imgList,
    linklist: state => state.linklist
  },
  actions: {
    getImg: ({ commit }) => {
      let URL = '/adone'
      api.get(URL).then((res) => {
        commit('getImg', res.data)
      })
    },

    getiImgList: ({ commit }) => {
      let URL = '/adtwo'
      api.get(URL).then((res) => {
        commit('getiImgList', res.data)
      })
    },

    getResource: ({ commit }, key) => {
      let URL = '/category'
      api.get(URL).then((res) => {
        commit('getResource', res.data)
      })
    }
  },
  mutations: {
    getImg: (state, key) => {
      for (const e in key) {
        if (key.hasOwnProperty(e)) {
          const element = key[0]
          state.searchkey = {
            slogan: element.title,
            num: element.desc,
            bgimg: element.pic
          }
        }
      }
    },

    getiImgList: (state, key) => {
      state.imgList = []
      for (const e in key) {
        if (key.hasOwnProperty(e)) {
          const element = key[e]
          state.imgList.push({
            link: element.url,
            img: element.pic,
            info: element.desc,
            order: element.order,
            id: element.id
          })
        }
      }
    },

    getResource: (state, key) => {
      let list = []
      for (const k in key) {
        if (key.hasOwnProperty(k)) {
          const element = key[k]
          if (k === '0') {
            for (let i = 0; i < element.length; i++) {
              const e = element[i]
              list.push({
                type: false,
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
                    id: e.id,
                    type: false
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

import api from 'assets/js/api'

export default {
  state: {
    searchkey: {
      slogan: '',
      num: 0,
      bgimg: ''
    },
    imgList: [],
    linklist: [],
    companyList: [],
    leftNavBox: [],
    sublist: [],
    Footer: {}
  },
  getters: {
    searchkey: state => state.searchkey,
    imgList: state => state.imgList,
    linklist: state => state.linklist,
    leftNavBox: state => state.leftNavBox,
    sublist: state => state.sublist,
    Footer: state => state.Footer
  },
  actions: {
    // 获取首页搜索背景
    getImg: ({ commit }) => {
      let URL = '/adone'
      api.get(URL).then((res) => {
        commit('getImg', res.data)
      })
    },
    // 获取首页轮播图
    getiImgList: ({ commit }) => {
      let URL = '/adtwo'
      api.get(URL).then((res) => {
        commit('getiImgList', res.data)
      })
    },
    // 获取资源库信息
    getResource: ({ commit }, key) => {
      let URL = '/category'
      api.get(URL).then((res) => {
        commit('getResource', res.data)
      })
    },
    // 发文单位
    getCompany: ({ commit }, key) => {
      let URL = '/company'
      api.get(URL).then((res) => {
        commit('getCompany', res.data)
      })
    },
    // 副导航
    getSublist: ({ commit }, key) => {
      let URL = '/subList'
      api.get(URL).then((res) => {
        commit('getSublist', res.data)
      })
    },
    // 获取页脚信息
    getFooter ({commit}) {
      let URL = '/footer'
      api.get(URL).then((res) => {
        commit('getFooter', res.data)
      })
    }
  },
  mutations: {
    // 获取首页搜索背景
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
    // 获取首页轮播图
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
    // 获取资源库信息
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
                item: [],
                type: false,
                sort: 'cids'
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
                    id: e.id
                  })
                }
              }
            }
          }
        }
      }
      state.linklist = list
      state.leftNavBox = [{
        title: '民航组织',
        type: false,
        label: [
          {
            id: 'caac',
            name: 'CAAC',
            type: false,
            sort: 'oragons'
          }, {
            id: 'faa',
            name: 'FAA',
            type: false,
            sort: 'oragons'
          }, {
            id: 'easa',
            name: 'EASA',
            type: false,
            sort: 'oragons'
          }
        ]
      }, {
        title: '主体分类',
        type: false,
        label: list
      }]
    },
    // 发文单位
    getCompany: (state, key) => {
      for (const e in key) {
        if (key.hasOwnProperty(e)) {
          const element = key[e]
          state.companyList.push(element)
        }
      }
    },
    // 副导航
    getSublist: (state, key) => {
      state.sublist = key.sublist
    },
    getFooter (state, key) {
      state.Footer = key.footer
    }
  }
}

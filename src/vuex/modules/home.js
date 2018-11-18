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
    moreLeftNavBox: {
      orangsList: {},
      cidsList: {},
      statusList: {},
      yearsList: {}
    }
  },
  getters: {
    searchkey: state => state.searchkey,
    imgList: state => state.imgList,
    linklist: state => state.linklist,
    leftNavBox: state => state.leftNavBox,
    moreLeftNavBox: state => state.moreLeftNavBox
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
    },
    getCompany: ({ commit }, key) => {
      let URL = '/company'
      api.get(URL).then((res) => {
        commit('getCompany', res.data)
      })
    },
    getMoreLeftNavBox: ({ commit }) => {
      let data = {
        page: 1,
        oragons: -1,
        bigCids: -1,
        subCids: -1,
        all: -1,
        title: -1,
        content: -1,
        company: -1,
        year: -1,
        status: -1,
        startTime: -1,
        endTime: -1,
        style: 1
      }

      let URL = '/fsearch' +
        '/' + data.page +
        '/' + data.oragons +
        '/' + data.bigCids +
        '/' + data.subCids +
        '/' + data.title +
        '/' + data.content +
        '/' + data.all +
        '/' + data.year +
        '/' + data.status +
        '/' + data.company +
        '/' + data.startTime +
        '/' + data.endTime +
        '/' + data.style
      api.get(URL).then((res) => {
        commit('getMoreLeftNavBox', res.data)
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
                name: e.name,
                id: e.id,
                item: [],
                type: false
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
        title: '明航组织',
        type: false,
        label: [
          {
            id: 'caac',
            name: 'CAAC',
            type: false
          }, {
            id: 'faa',
            name: 'FAA',
            type: false
          }, {
            id: 'easa',
            name: 'EASA',
            type: false
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
    // 高级搜索
    getMoreLeftNavBox: (state, key) => {
      state.moreLeftNavBox = {
        orangsList: {},
        cidsList: {},
        statusList: {},
        yearsList: {}
      }
      let orangsList = []
      let cidsList = []
      let statusList = []
      let yearsList = []
      if (key) {
        for (const a in key.orangs) {
          if (key.orangs.hasOwnProperty(a)) {
            const element = key.orangs[a]
            orangsList.push({
              id: element.organ,
              name: element.name,
              number: element.c
            })
          }
        }
        for (const a in key.cids) {
          if (key.cids.hasOwnProperty(a)) {
            const element = key.cids[a]
            cidsList.push({
              id: element.bigCatagoryId,
              name: element.name,
              number: element.c
            })
          }
        }

        for (const b in key.status) {
          if (key.status.hasOwnProperty(b)) {
            const element = key.status[b]
            statusList.push({
              id: element.status,
              name: element.name,
              number: element.c
            })
          }
        }

        for (const c in key.years) {
          if (key.years.hasOwnProperty(c)) {
            const element = key.years[c]
            yearsList.push({
              id: element.year,
              name: element.year,
              number: element.c
            })
          }
        }
        state.moreLeftNavBox = {
          orangsList,
          cidsList,
          statusList,
          yearsList
        }
      }
    }
  }
}

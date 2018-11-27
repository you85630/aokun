import api from 'assets/js/api'

export default {
  state: {
    num: 0,
    itemList: [],
    moreLeftNavBox: []
  },
  getters: {
    num: state => state.num,
    itemList: state => state.itemList,
    moreLeftNavBox: state => state.moreLeftNavBox
  },
  actions: {
    // 搜索
    searchData: ({ commit }, key) => {
      // /fsearch/{page}/{oragons}/{bigCids}/{subCids}/{title}/{content}/{all}/{year}/{status}/{company}/{startTime}/{endTime}/{style}
      // page：第几页：没有的填0
      // oragons：组织caac，faa，easa没有的填-1，多个用,分开
      // bigCids：大分类id:没有的填-1，多个用,分开
      // subCids：小分类id:没有的填-1，多个用,分开
      // title:标题搜索：没有的填-1
      // content：内容搜索：没有填-1
      // all:全部搜索：没有的填-1
      // company：发文单位Id:没有-1
      // startTime/endTime：发文开始结束日期
      // style：普通还是高级：高级1，普通填-1

      let data = {
        page: key.page ? key.page : 1,
        oragons: key.oragons ? key.oragons : -1,
        bigCids: key.bigCids ? key.bigCids : -1,
        subCids: key.subCids ? key.subCids : -1,
        all: key.selectid === 1 ? key.text ? key.text : -1 : -1,
        title: key.selectid === 2 ? key.text ? key.text : -1 : -1,
        content: key.selectid === 3 ? key.text ? key.text : -1 : -1,
        company: key.company ? key.company : -1,
        year: key.year ? key.year : -1,
        status: key.status ? key.status : -1,
        startTime: key.startTime ? Math.round(new Date(key.startTime) / 1000) : -1,
        endTime: key.endTime ? Math.round(new Date(key.endTime) / 1000) : -1,
        style: key.style ? key.style : -1
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
        commit('searchData', res.data)
      })
    },
    // 高级搜索
    getMoreSearch: ({ commit }) => {
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
        commit('getMoreSearch', res.data)
      })
    }
  },

  mutations: {
    // 搜索
    searchData: (state, key) => {
      state.itemList = []
      if (key) {
        state.num = key.count
        state.itemList = key.categorys
        for (const e in state.itemList) {
          if (state.itemList.hasOwnProperty(e)) {
            const element = state.itemList[e]
            element.organ = element.organ.toUpperCase()
            let time = ''
            let etime = ''
            // 开始时间
            if (element.postTime) {
              let date = new Date(element.postTime * 1000)
              let Y = date.getFullYear() + '-'
              let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
              let D = date.getDate() + ' '
              time = Y + M + D
            }
            if (element.TerminationDate) {
              // 结束时间
              let date1 = new Date(element.TerminationDate * 1000)
              let Y1 = date1.getFullYear() + '-'
              let M1 = (date1.getMonth() + 1 < 10 ? '0' + (date1.getMonth() + 1) : date1.getMonth() + 1) + '-'
              let D1 = date1.getDate() + ' '
              etime = Y1 + M1 + D1
            }
            element.time = time
            element.etime = etime
          }
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
                number: element.c,
                sort: 'oragons'
              })
            }
          }
          for (const a in key.cids) {
            if (key.cids.hasOwnProperty(a)) {
              const element = key.cids[a]
              cidsList.push({
                id: element.bigCatagoryId,
                name: element.name,
                number: element.c,
                sort: 'cids'
              })
            }
          }

          for (const b in key.status) {
            if (key.status.hasOwnProperty(b)) {
              const element = key.status[b]
              statusList.push({
                id: element.status,
                name: element.name,
                number: element.c,
                sort: 'status'
              })
            }
          }

          for (const c in key.years) {
            if (key.years.hasOwnProperty(c)) {
              const element = key.years[c]
              yearsList.push({
                id: element.year,
                name: element.year,
                number: element.c,
                sort: 'years'
              })
            }
          }
          state.moreSearch = {
            orangsList,
            cidsList,
            statusList,
            yearsList
          }
          state.moreLeftNavBox = [
            {
              title: '明航组织',
              type: false,
              label: orangsList
            }, {
              title: '主体分类',
              type: false,
              label: cidsList
            }, {
              title: '文档有效期',
              type: false,
              label: statusList
            }, {
              title: '文档年份',
              type: false,
              label: yearsList
            }
          ]
        }
      }
    },
    // 高级搜索
    getMoreSearch: (state, key) => {
      state.moreSearch = {
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
              number: element.c,
              sort: 'orangs'
            })
          }
        }
        for (const a in key.cids) {
          if (key.cids.hasOwnProperty(a)) {
            const element = key.cids[a]
            cidsList.push({
              id: element.bigCatagoryId,
              name: element.name,
              number: element.c,
              sort: 'cids'
            })
          }
        }

        for (const b in key.status) {
          if (key.status.hasOwnProperty(b)) {
            const element = key.status[b]
            statusList.push({
              id: element.status,
              name: element.name,
              number: element.c,
              sort: 'status'
            })
          }
        }

        for (const c in key.years) {
          if (key.years.hasOwnProperty(c)) {
            const element = key.years[c]
            yearsList.push({
              id: element.year,
              name: element.year,
              number: element.c,
              sort: 'years'
            })
          }
        }
        state.moreSearch = {
          orangsList,
          cidsList,
          statusList,
          yearsList
        }
        state.moreLeftNavBox = [
          {
            title: '明航组织',
            type: false,
            label: orangsList
          }, {
            title: '主体分类',
            type: false,
            label: cidsList
          }, {
            title: '文档有效期',
            type: false,
            label: statusList
          }, {
            title: '文档年份',
            type: false,
            label: yearsList
          }
        ]
      }
    }
  }
}

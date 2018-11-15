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
      // /fsearch/{page}/{oragons}/{bigCids}/{subCids}/{title}/{content}/{all}/{company}/{startTime}/{endTime}/{style}
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
        startTime: key.startTime === 1 ? key.startTime : -1,
        endTime: key.endTime === 1 ? key.endTime : -1,
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
        '/' + data.company +
        '/' + data.startTime +
        '/' + data.endTime +
        '/' + data.style
      api.get(URL).then((res) => {
        commit('searchData', res.data)
      })
    }
  },

  mutations: {
    // 搜索
    searchData: (state, key) => {
      state.moreLeftNavBox = []
      state.itemList = []
      if (key) {
        state.num = key.count
        state.itemList = key.categorys
        for (const e in state.itemList) {
          if (state.itemList.hasOwnProperty(e)) {
            const element = state.itemList[e]
            let date = new Date(element.postTime * 1000)
            let Y = date.getFullYear() + '-'
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
            let D = date.getDate() + ' '
            let time = Y + M + D
            element.time = time
            element.organ = element.organ.toUpperCase()
            if (!element.wenhao) {
              element.wenhao = '暂无'
            }
          }
        }

        // 高级搜索
        if (key.cids) {
          let orangsList = {
            title: '明航组织',
            type: false,
            label: []
          }
          let cidsList = {
            type: false,
            title: '主体分类',
            label: []
          }
          let statusList = {
            type: false,
            title: '文档有效性',
            label: []
          }
          let yearsList = {
            type: false,
            title: '文档年份',
            label: []
          }

          for (const a in key.orangs) {
            if (key.orangs.hasOwnProperty(a)) {
              const element = key.orangs[a]
              orangsList.label.push({
                id: element.bigCatagoryId,
                name: element.name,
                number: element.c
              })
            }
          }
          for (const a in key.cids) {
            if (key.cids.hasOwnProperty(a)) {
              const element = key.cids[a]
              cidsList.label.push({
                id: element.bigCatagoryId,
                name: element.name,
                number: element.c
              })
            }
          }

          for (const b in key.status) {
            if (key.status.hasOwnProperty(b)) {
              const element = key.status[b]
              statusList.label.push({
                id: element.status,
                name: element.name,
                number: element.c
              })
            }
          }

          for (const c in key.years) {
            if (key.years.hasOwnProperty(c)) {
              const element = key.years[c]
              yearsList.label.push({
                id: element.year,
                name: element.year,
                number: element.c
              })
            }
          }
          state.moreLeftNavBox = [orangsList, cidsList, statusList, yearsList]
        }
      }
    }
  }
}

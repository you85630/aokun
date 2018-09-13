import api from 'assets/js/api'

export default {
  state: {
    leftNav: [],
    issueBox: [],
    helpTips: [
      {
        name: '搜索',
        img: 'http://osc94pt0z.bkt.clouddn.com/icon-1.png'
      }, {
        name: '视频教程',
        img: 'http://osc94pt0z.bkt.clouddn.com/icon-1.png'
      }, {
        name: '用户指南',
        img: 'http://osc94pt0z.bkt.clouddn.com/icon-1.png'
      }
    ]
  },
  getters: {
    leftNav: state => state.leftNav,
    helpTips: state => state.helpTips,
    issueBox: state => state.issueBox
  },
  actions: {
    getHelp: ({ commit }, key) => {
      let URL = '/help'
      api.get(URL).then((res) => {
        commit('getHelp', res.data)
      })
    },
    getAsk: ({ commit }, key) => {
      let URL = '/ask'
      api.get(URL).then((res) => {
        commit('getAsk', res.data)
      })
    }
  },
  mutations: {
    getHelp: (state, key) => {
      state.leftNav = key
      for (const key in state.leftNav) {
        if (state.leftNav.hasOwnProperty(key)) {
          const e = state.leftNav[key]
          e.link = ''
          e.name = e.class_name
        }
      }
    },
    getAsk: (state, key) => {
      for (const k in key) {
        if (key.hasOwnProperty(k)) {
          const e = key[k]
          e.title = e.class_name
          e.show = false
        }
      }
      state.issueBox = key
    }
  }
}

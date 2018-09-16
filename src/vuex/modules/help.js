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
      var map = {}
      var dest = []
      for (var i = 0; i < key.length; i++) {
        var e = key[i]
        e.show = false
        if (!map[e.class_id]) {
          dest.push({
            class_id: e.class_id,
            title: e.class_name,
            data: [e],
            show: false
          })
          map[e.class_id] = e
        } else {
          for (var j = 0; j < dest.length; j++) {
            var dj = dest[j]
            if (dj.class_id === e.class_id) {
              dj.data.push(e)
              break
            }
          }
        }
      }
      dest[0].show = true
      dest[0].data[0].show = true
      state.issueBox = dest
    }
  }
}

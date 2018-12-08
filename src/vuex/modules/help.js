import api from 'assets/js/api'

export default {
  state: {
    leftNav: [],
    issueBox: [],
    helpTips: [
      {
        name: '搜索',
        img: 'http://www.aerok.com.cn/icons/icon-05.png',
        link: '/search'
      }, {
        name: '视频教程',
        img: 'http://www.aerok.com.cn/icons/icon-07.png',
        link: '/login#video'
      }, {
        name: '用户指南',
        img: 'http://www.aerok.com.cn/icons/icon-08.png',
        link: '/data'
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
      // state.leftNav = key
      var map = {}
      var dest = []
      for (var i = 0; i < key.length; i++) {
        var e = key[i]
        e.show = false
        if (!map[e.class_id]) {
          dest.push({
            class_id: e.class_id,
            title: e.class_name,
            data: [e]
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
      state.leftNav = dest
    },
    getAsk: (state, key) => {
      var map = {}
      var dest = []
      for (var i = 0; i < key.length; i++) {
        var e = key[i]
        if (!map[e.class_id]) {
          dest.push({
            class_id: e.class_id,
            title: e.class_name,
            data: [e]
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
      state.issueBox = dest
    }
  }
}

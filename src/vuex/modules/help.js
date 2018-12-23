import api from 'assets/js/api'

export default {
  state: {
    leftNav: [],
    helpTips: []
  },
  getters: {
    leftNav: state => state.leftNav,
    helpTips: state => state.helpTips
  },
  actions: {
    getHelp: ({ commit }, key) => {
      let URL = '/help'
      api.get(URL).then((res) => {
        commit('getHelp', res.data)
      })
    }
  },
  mutations: {
    getHelp: (state, key) => {
      var map = {}
      var dest = []
      for (var i = 0; i < key.data.length; i++) {
        var e = key.data[i]
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
      state.helpTips = key.helpTips
    }
  }
}

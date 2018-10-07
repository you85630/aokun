import api from 'assets/js/api'

export default {
  state: {
    videoBox: {
      play: false,
      video: 'https://v.qq.com/txp/iframe/player.html?vid=e07857p9nxw',
      cover: 'http://pbsbjhfvy.bkt.clouddn.com/img-4.jpeg'
    },
    aboutBox: []
  },
  getters: {
    videoBox: state => state.videoBox,
    aboutBox: state => state.aboutBox
  },
  actions: {
    getStudy: ({ commit }, key) => {
      let URL = '/study'
      api.get(URL).then((res) => {
        commit('getStudy', res.data)
      })
    }
  },
  mutations: {
    getStudy: (state, key) => {
      var map = {}
      var dest = []
      for (var i = 0; i < key.length; i++) {
        var e = key[i]
        if (!map[e.class_id]) {
          dest.push({
            class_id: e.class_id,
            class_name: e.class_name,
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
      state.aboutBox = dest
    }
  }
}

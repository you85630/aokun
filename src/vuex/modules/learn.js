import api from 'assets/js/api'

export default {
  state: {
    bookList: [],
    learnImgList: []
  },
  getters: {
    bookList: state => state.bookList,
    learnImgList: state => state.learnImgList
  },
  actions: {
    getBookList ({commit}) {
      let URL = '/learn'
      api.get(URL).then((res) => {
        commit('getBookList', res.data)
      })
    },
    getImgList ({commit}) {
      let URL = '/learnpic'
      api.get(URL).then((res) => {
        commit('getImgList', res.data)
      })
    }
  },
  mutations: {
    getBookList (state, key) {
      var map = {}
      var dest = []
      for (var i = 0; i < key.length; i++) {
        var e = key[i]
        if (!map[e.class_id]) {
          dest.push({
            id: e.class_id,
            title: e.class_name,
            list: [e]
          })
          map[e.class_id] = e
        } else {
          for (var j = 0; j < dest.length; j++) {
            var dj = dest[j]
            if (dj.id === e.class_id) {
              dj.list.push({
                title: e.title,
                id: e.id
              })
              break
            }
          }
        }
      }
      state.bookList = dest
    },
    getImgList (state, key) {
      if (key) {
        state.learnImgList = key
      }
    }
  }
}

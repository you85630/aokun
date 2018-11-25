import api from 'assets/js/api'

export default {
  state: {
    bookList: [
      {
        title: '标题2',
        list: [
          {
            name: '111',
            link: ''
          }, {
            name: '111',
            link: ''
          }, {
            name: '111',
            link: ''
          }, {
            name: '111',
            link: ''
          }
        ]
      }, {
        title: '标题2',
        list: [
          {
            name: '111',
            link: ''
          }, {
            name: '111',
            link: ''
          }, {
            name: '111',
            link: ''
          }, {
            name: '111',
            link: ''
          }
        ]
      }
    ]
  },
  getters: {
    bookList: state => state.bookList
  },
  actions: {
    getBookList ({commit}) {
      let URL = '/learn'
      api.get(URL).then((res) => {
        commit('getBookList', res.data)
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
    }
  }
}

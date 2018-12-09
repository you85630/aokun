import api from 'assets/js/api'

export default {
  state: {
    status: true,
    Message: {},
    User: {},
    videoBox: {},
    aboutBox: [],
    loginInfoMsg: ''
  },
  getters: {
    status: state => state.status,
    Message: state => state.Message,
    User: state => state.User,
    videoBox: state => state.videoBox,
    aboutBox: state => state.aboutBox,
    loginInfoMsg: state => state.loginInfoMsg
  },
  actions: {
    getStudy: ({ commit }, key) => {
      let URL = '/study'
      api.get(URL).then((res) => {
        commit('getStudy', res.data)
      })
    },
    getVideoBox: ({ commit }, key) => {
      let URL = '/vadc'
      api.get(URL).then((res) => {
        commit('getVideoBox', res.data)
      })
    },
    // 获取验证码
    getCode: ({ commit }, key) => {
      let URL = '/code/' + key
      api.get(URL).then((res) => {
        commit('getCode', res.data)
      })
    },
    // 注册
    getRegister: ({ commit }, key) => {
      let URL = '/register' +
        '/' + key.tel +
        '/' + key.name +
        '/' + key.pwd +
        '/' + key.code +
        '/' + key.comp +
        '/' + key.job

      api.get(URL).then((res) => {
        commit('getRegister', res.data)
      })
    },
    // 登录
    login: ({ commit }, key) => {
      let URL = '/login' +
        '/' + key.tel +
        '/' + key.pwd

      api.get(URL).then((res) => {
        commit('login', res.data)
      })
    },
    loginInfo: ({ commit }, key) => {
      let URL = '/logininfo'
      api.get(URL).then((res) => {
        commit('loginInfo', res.data)
      })
    },
    // 退出
    exit: ({ commit }) => {
      commit('exit')
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
    },
    getVideoBox: (state, key) => {
      state.videoBox = key[0]
    },
    // 获取验证码
    getCode: (state, key) => {
      state.Message = {}
      if (key.result) {
        state.Message.status = false
        state.Message.msg = key.result
      } else {
        state.Message.status = true
      }
    },
    // 注册
    getRegister: (state, key) => {
      state.Message = {}
      if (key.result) {
        state.Message.status = false
        state.Message.msg = key.result
      } else {
        state.Message.status = true
      }
    },
    // 登录
    login: (state, key) => {
      state.Message = {}
      if (key.name) {
        state.Message.status = true
        state.User = key
        this._vm.VueCookie.set('AOKUN-USER', JSON.stringify(key))
      } else {
        state.Message.status = false
        state.Message.msg = key.result
      }
    },
    // 登录后信息
    loginInfo: (state, key) => {
      state.loginInfoMsg = key
    },
    // 退出
    exit: (state, key) => {
      state.User = {}
      this._vm.VueCookie.delete('AOKUN-USER')
    }
  }
}

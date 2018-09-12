import api from 'assets/js/api'

export default {
  state: {
    videoBox: {
      play: false,
      video: '',
      cover: 'http://pbsbjhfvy.bkt.clouddn.com/img-4.jpeg'
    },
    aboutBox: [
      {
        title: '数据库概述',
        box: [
          {
            icon: 'md-arrow-dropright-circle',
            name: '仪表板教程视频',
            msg: '数据库的仪表板需要个人登录。您的个人登录信息允许您通过保存搜索，创建项目文件夹，注释出版物等来自定义您的体验。'
          }
        ]
      }, {
        title: '数据库功能',
        box: [
          {
            icon: 'ios-create',
            name: '自定义注释',
            msg: '查看文档的在线版本并合并您自己的个人注释。'
          },
          {
            icon: 'ios-folder',
            name: '项目文件夹',
            msg: '创建无限的项目文件夹，并快速添加您喜欢的文档。'
          },
          {
            icon: 'ios-cloud-circle',
            name: '保存的搜索',
            msg: '保存您已执行的搜索(登陆后)，并使用已应用的过滤器，以便快速轻松地继续研究或查找符合您标准的新出版物。'
          }
        ]
      }
    ]
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

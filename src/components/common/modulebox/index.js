import bgcolor from './../bgcolor.vue'
import bgimg from './../bgimg.vue'
import select from './../select.vue'
import page from './../page.vue'

const moduleBox = {
  install: function (Vue) {
    Vue.component('bgColor', bgcolor)
    Vue.component('bgImg', bgimg)
    Vue.component('ySelect', select)
    Vue.component('yPage', page)
  }
}
export default moduleBox

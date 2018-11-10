import bgcolor from './../bgcolor.vue'
import page from './../page.vue'
import search from './../search.vue'

const moduleBox = {
  install: function (Vue) {
    Vue.component('bgColor', bgcolor)
    Vue.component('yPage', page)
    Vue.component('ySearch', search)
  }
}
export default moduleBox

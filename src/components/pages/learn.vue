<template>
  <div class="learn-more">
    <bg-color :header="header1">
      <slide :list="imgList"></slide>
    </bg-color>

    <bg-color :header="header2">
      <slide :list="imgList"></slide>
    </bg-color>

    <bg-color>
      <book-list :list="bookList"></book-list>
    </bg-color>
  </div>
</template>

<script>
import slide from 'components/modules/slide'
import bookList from 'components/modules/book-list'

import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    slide,
    bookList
  },
  data () {
    return {
      header1: '翱坤知识库',
      header2: '翱坤知识库',
      imgList: [
        {
          img: 'http://pi2nvcrkg.bkt.clouddn.com/1.jpeg',
          info: '啦啦啦啦',
          link: ''
        }, {
          img: 'http://pi2nvcrkg.bkt.clouddn.com/2.jpeg',
          info: '啦啦啦啦',
          link: ''
        }, {
          img: 'http://pi2nvcrkg.bkt.clouddn.com/3.jpeg',
          info: '啦啦啦啦',
          link: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'bookList'
    ])
  },
  methods: {
    ...mapActions([
      'getBookList'
    ])
  },
  created () {
    this.getBookList()
  }
}
</script>

<style lang="scss" scoped>

</style>

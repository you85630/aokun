<template>
  <div class="learn-more">

    <bg-color>
      <y-search></y-search>
    </bg-color>

    <bg-color :header="header">
      <slide :list="learnImgList"></slide>
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
      header: '翱坤知识库'
    }
  },
  computed: {
    ...mapGetters([
      'bookList',
      'learnImgList'
    ])
  },
  methods: {
    ...mapActions([
      'getBookList',
      'getImgList'
    ])
  },
  created () {
    this.getBookList()
    this.getImgList()
  }
}
</script>

<style lang="scss" scoped>

</style>

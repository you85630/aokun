<template>
  <div class="learn-more">
    <bg-color :header="header1">
      <slide :list="imgList"></slide>
    </bg-color>

    <bg-color :header="header2">
      <slide :list="imgList"></slide>
    </bg-color>

    <bg-color>
      <book-list></book-list>
    </bg-color>
  </div>
</template>

<script>
import slide from 'components/modules/slide'
import bookList from 'components/modules/book-list'

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
          img: 'http://pbsbjhfvy.bkt.clouddn.com/img-6.jpeg',
          info: '啦啦啦啦',
          link: ''
        }, {
          img: 'http://pbsbjhfvy.bkt.clouddn.com/img-7.jpeg',
          info: '啦啦啦啦',
          link: ''
        }, {
          img: 'http://pbsbjhfvy.bkt.clouddn.com/img-8.jpeg',
          info: '啦啦啦啦',
          link: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

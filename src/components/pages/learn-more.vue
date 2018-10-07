<template>
  <div class="learn-more">
    <bg-color>
      <slide :list="imgList"></slide>
    </bg-color>

    <bg-color>
      <slide :list="imgList"></slide>
    </bg-color>

    <bg-color>
      <book-list></book-list>
    </bg-color>
  </div>
</template>

<script>
import slide from 'components/modules/learn/slide'
import bookList from 'components/modules/learn/book-list'

export default {
  components: {
    slide,
    bookList
  },
  data () {
    return {
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

<template>
  <div class="news">
    <bg-color :header="header">
        <Breadcrumb>
            <BreadcrumbItem>{{news.class_name}}</BreadcrumbItem>
            <BreadcrumbItem>{{news.title}}</BreadcrumbItem>
        </Breadcrumb>
        <div class="content" v-html="news.content"></div>
    </bg-color>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      header: '学习'
    }
  },
  computed: {
    ...mapGetters([
      'news'
    ])
  },
  methods: {
    ...mapActions([
      'getNews'
    ]),
    init () {
      let id = this.$route.query.id
      this.getNews(id)
    }
  },
  created () {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.news{
  font-size: 14px;
  .content{
    margin-top: 10px;
  }
}
</style>

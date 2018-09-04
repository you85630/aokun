<template>
  <div class="learn">
    <bg-color>
      <search-box></search-box>
    </bg-color>

    <bg-color>
      <login></login>
    </bg-color>

    <about></about>
  </div>
</template>

<script>
import searchBox from 'components/common/search'
import login from 'components/modules/learn/login'
import about from 'components/modules/learn/about'

export default {
  components: {
    searchBox,
    login,
    about
  }
}
</script>

<style lang="scss" scoped>
.learn{}
</style>

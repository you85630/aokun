<template>
  <div class="bgcolor">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.bgcolor{
  box-sizing: border-box;
  margin-bottom: 30px;
  padding: 40px;
  width: 100%;
  background-color: #b0c1da;
}
</style>

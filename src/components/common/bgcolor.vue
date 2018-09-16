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
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 2px 5px #ccc;
}
</style>

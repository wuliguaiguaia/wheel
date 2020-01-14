<template>
  <button class="z-button">按钮
      <a href="">dasdasd</a>
  </button>
</template>

<script>
export default {
    name: 'z-button',
    props: {

    }
}
</script>

<style lang='scss' scoped>
@import './var';
.z-button{
    width: 78px;
    height: 24px;
    background: $--color-primary ;
}
</style>
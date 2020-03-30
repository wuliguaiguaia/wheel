<template>
  <header class="jus-between">
      <div class="logo">ZWheel</div>
      <div>ZWheel</div>
  </header>
</template>

<script>
export default {
	name: 'mainHeader'
};
</script>

<style lang='scss' scoped>
@import "./../styles/var.scss";
header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 64px;
    line-height: 64px;
    padding: 0 30px;
    color: #fff;
    font-size: 15px;
    .logo{
        font-size: 25px;
        font-weight: bold;
    }
}
</style>
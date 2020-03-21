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
    background: $-main-color;
    padding: 0 30px;
    color: #fff;
    font-size: 15px;
    box-shadow: 0 0.25rem 0.25rem rgba(0,0,0,.25), inset 0 -1px 5px rgba(0,0,0,.25);
    .logo{
        font-size: 25px;
        font-weight: bold;
    }
}
</style>
<template>
    <div class="main">
        <div class="container jusCenter-alignCenter">
            <div class="left">
                <div>自從遇見了你</div>
                <div>世間所有美好終成具象</div>
                <z-button @click="$router.push({path:'/getStart'})">Get Start</z-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: 'home',
};
</script>

<style lang="scss" scoped>
.main{
    margin-top: 64px;
    width: 100%;
    height: calc(100vh - 64px);
    background: url("../../assets/bg.jpeg");
    background-size: cover;
    color: #fff;
}
.container{
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.4);
}
</style>
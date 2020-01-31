<template>
    <i :class="'z-icon'+name"></i>
</template>

<script>
export default {
    name: 'z-icon',
    props:{
        name:{
            type: String
        }
    }
}
</script>

<style lang='scss' scoped>

</style>
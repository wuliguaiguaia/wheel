<template>
  <div>
      <input type="text" v-model="model">
  </div>
</template>

<script>
export default {
    name: "z-input",
    props:{},
    computed:{
        model:{
            get () { return "" },
            set (val) {
                this.$emit('input', val)
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
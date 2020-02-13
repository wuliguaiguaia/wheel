<template>
  <div class="z-input">
      <input type="text" v-model="model">
  </div>
</template>

<script>
export default {
    name: "ZInput",
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
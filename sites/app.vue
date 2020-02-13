<template>
<div>
  <z-button disabled  loading  type="text" icon="icon-tuichu">sfsadf</z-button>
  <z-button  type="text">sfsadf</z-button>
  <z-button  plain  type="primary">sfsadf</z-button>
  <z-button plain disabled  type="primary">sfsadf</z-button>

  <z-button  circle  type="primary" size="small">1</z-button>
  <z-button  round  type="primary" size="small">1</z-button>
  <z-button  plain  type="primary" size="small">1</z-button>
  <z-button  plain  type="primary" size="small">1</z-button>
  <z-button  plain  type="primary" size="small">1</z-button>
  <z-button  plain  type="primary" size="small">1</z-button>
  <z-button  plain  type="primary" size="small">1</z-button>
</div>
</template>

<script>

export default {
  data(){
    return{
      radio: '',
      xx:''
    }
  },
 components:{
  },
  watch: {
    radio(val){
      console.log(val)
    },
    xx(val){
      console.log(val);
      
    }
  }
}
</script>

<style lang="scss">

</style>
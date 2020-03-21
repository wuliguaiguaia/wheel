<template>
  <div>
  <z-button disabled  loading  type="text" icon="icon-tuichu">sfsadf</z-button>
  <z-button  type="text">sfsadf</z-button>
  <z-button  plain  type="primary">sfsadf</z-button>
  <z-button plain disabled  type="primary">sfsadf</z-button>
  <z-button plain disabled  type="success">sfsadf</z-button>

  <z-button  circle  type="primary" size="small">1</z-button>
  <z-button  round  type="primary" size="small">1</z-button>
  <z-button  plain  type="primary" size="small">1</z-button>
  <z-button  plain  type="primary" size="small">1</z-button>
  <z-button  plain  type="primary" size="small">1</z-button>
  <z-button  plain  type="primary" size="small">1</z-button>
  <z-button  plain  type="primary" size="small">1</z-button>
  <z-button  plain  type="primary" size="small">1</z-button>
  <hr>
  <z-cascader :options="options" v-model="value" @change="handleChange"></z-cascader>
  <z-cascader :options="options" v-model="value" :show-all-levels="false" @change="handleChange"></z-cascader>
  <z-cascader :options="options" v-model="value" filterable @change="handleChange"></z-cascader>
  <z-cascader :options="options" v-model="value" placeholder="sdadasdasd" @change="handleChange"></z-cascader>
  <z-cascader :options="options" v-model="value" :props="{expandTrigger: 'hover'}" @change="handleChange"></z-cascader>
</div>
</template>

<script>
export default {

};
</script>

<style>

</style>
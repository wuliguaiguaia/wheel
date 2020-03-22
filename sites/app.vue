<template>
  <div id="app">
	<main-header></main-header>
	<z-cascader></z-cascader>
    <router-view/>
  </div>
</template>


<script>
import mainHeader from './common/components/mainHeader';
export default {
	data(){
		return{};
	},
	components:{
		mainHeader
	},
	watch: {
	},
	methods: {
		handleChange(){}
	}
};
</script>

<style lang="scss">

</style>
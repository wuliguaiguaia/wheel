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
		return {
			loading: null
		};
	},
	created(){
		this.loading = this.$loading({});
		setTimeout(() => {
			this.loading.close();
		}, 1000);
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
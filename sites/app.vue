<template>
  <div id="app">
	<!-- <main-header></main-header>
    <router-view/> -->
  </div>
</template>


<script>
import mainHeader from './common/components/mainHeader';
export default {
	data(){
		return {
			loading: null,
			message: null
		};
	},
	created(){
		this.loading = this.$loading({});
		setTimeout(() => {
			this.loading.close();
		}, 1000);

		setTimeout(() => {
			this.message = this.$message.loading('dasdasdfsadfsdfsad');
		}, 1000);
	},
	components:{
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
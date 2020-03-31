<template>
  <div id="app" style="height:200vw">
	<!-- <main-header></main-header>
    <router-view/> -->
	<div style="height:500px; margin-left: 200px">
			<z-button v-tooltip.canPaste.left="'我是傻x'">按钮啦</z-button>
	</div>
	<z-button v-tooltip.canPaste.bottom="'我是大叔大婶大所大所大所大所傻x'">按钮啦</z-button>
	<z-button v-tooltip.canPaste.top="'我大叔大婶大所是傻x'">按钮啦</z-button>
	<z-button v-tooltip.canPaste.right="'我是傻x'">按钮啦</z-button>
  </div>
</template>


<script>
import mainHeader from './common/components/mainHeader';
export default {
	data(){
		return {
			loading: null,
			message: null,
			placement: 'right'
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
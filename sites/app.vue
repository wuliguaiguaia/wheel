<template>
  <div id="app" style="height:200vw; margin:100px">
	灵性开关
    <z-switch v-model="value"></z-switch>
    <br>

	文字开关
    <z-switch v-model="value" active-text="打开互动区" inactive-text="收起互动区"></z-switch>
    <br>

	内联文字开关
    <z-switch v-model="value" active-text="开" inactive-text="关" inside-text @change="changeSwitch"></z-switch>
    <br>

	禁用开关
    <z-switch v-model="value" active-text="开" inactive-text="关" disabled></z-switch>
    <br>

	普通开关：
    <z-switch v-model="value" active-text="打开互动区" inactive-text="收起互动区" normal></z-switch>
    <br>

	内联文字开关
    <z-switch v-model="value" active-text="开" inactive-text="关" inside-text normal></z-switch>
    <br>

	禁用开关
    <z-switch v-model="value" active-text="开" inactive-text="关" disabled normal></z-switch>
    <br>
  </div>
</template>


<script>
export default {
	data(){
		return {
			loading: null,
			message: null,
			placement: 'right',
			isExpand: false,
			value: false
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
	methods: {
		changeSwitch(e){
			console.log(e);
			
		}
	}
};
</script>

<style lang="scss">
.z-switch {
	margin-bottom: 30px;
}
</style>
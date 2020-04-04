## Input

<template>
  <div id="app" style="height:200vw; margin:100px">
	单行文本框：
	<z-input type='text' v-model="value" autofocus placeholder="User Name"></z-input>
	<z-input type='text' v-model="value" labelName="User Name" labelFix></z-input>
	<z-input type='text' v-model="value" labelName="User Name" labelFloat></z-input>

	禁用：
	<z-input type='text' v-model="value" placeholder="User Name" disabled></z-input>

	多行文本框：
	<z-input type='text' v-model="value" labelName="Message" multiple labelFloat></z-input>

	密码框：
	<z-input type='password' v-model="value" placeholder="Password" showPassword></z-input>

	字数统计：
	<z-input type='text' v-model="value" labelName="User Name" maxlength="20" labelFloat></z-input>

	图标：
	<z-input type='text' v-model="value" placeholder="Search" maxlength="20" prefix-icon="el-icon-search"></z-input>
	<z-input type='text' v-model="value" labelName="Search" maxlength="20" suffix-icon="el-icon-search"></z-input>

	可展开文本框：<br>
	<div class="flex">
		<i class="el-icon-search" @click="isExpand = true"></i>
		<z-input type='text' v-model="value" placeholder="Search for ..." canExpand :isExpand="isExpand" @close ="isExpand = false" suffix-icon="el-icon-close"></z-input>
	</div>

	文字提示：
	<z-input type='text' v-model="value" labelName="User Name" helperText="用户名已存在" showHelperText labelFloat></z-input>

	普通文本框:
	<z-input type='text' v-model="value" placeholder="User Name" normal></z-input>
	<z-input type='text' v-model="value" labelName="username" placeholder="User Name" normal></z-input>
	<z-input type='text' v-model="value" placeholder="User Name" disabled normal></z-input>
	<z-input type='text' v-model="value" placeholder="User Name" multiple normal></z-input>
	<z-input type='password' v-model="value" placeholder="Password" normal></z-input>
	<z-input type='text' v-model="value" placeholder="Search for ..." canExpand :isExpand="false" suffix-icon="el-icon-close" normal></z-input>
	<z-input type='text' v-model="value" placeholder="User Name" helperText="用户名已存在" showHelperText normal></z-input>
	<z-input type='text' v-model="value" placeholder="User Name" maxlength="20" normal></z-input>
	<z-input type='text' v-model="value" placeholder="User Name" maxlength="20" suffix-icon="el-icon-edit" normal></z-input>

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
			value: ''
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
};
</script>

<style lang="scss">
.z-button-group{
	margin: 10px;
}
.z-input {
	margin-bottom: 30px;
}
</style>
<template>
  <div id="app" style="height:200vw; margin:100px">
	<h1>开关</h1>
	<h3>默认开关</h3>
    <z-switch v-model="valueswitch"></z-switch>
    <br>

	<h3>文字开关</h3>
    <z-switch v-model="valueswitch" active-text="打开互动区" inactive-text="收起互动区"></z-switch>
    <br>
	<h3>内联文字开关</h3>
    <z-switch v-model="valueswitch" active-text="开" inactive-text="关" inside-text @change="changeSwitch"></z-switch>
    <br>
	<h3>禁用开关</h3>
    <z-switch v-model="valueswitch" active-text="开" inactive-text="关" disabled></z-switch>
    <br>
	<h3>普通开关</h3>
    <z-switch v-model="valueswitch" active-text="打开互动区" inactive-text="收起互动区" normal></z-switch>
    <br>
	<h3>内联文字开关</h3>
    <z-switch v-model="valueswitch" active-text="开" inactive-text="关" inside-text normal></z-switch>
    <br>
	<h3>禁用开关</h3>
    <z-switch v-model="valueswitch" active-text="开" inactive-text="关" disabled normal></z-switch>
    <hr>

	<h1>单行文本框</h1>
	<z-input type='text' v-model="value" autofocus placeholder="User Name"></z-input>
	<z-input type='text' v-model="value" labelName="User Name" labelFix></z-input>
	<z-input type='text' v-model="value" labelName="User Name" labelFloat></z-input>
	<h3>禁用</h3>
	<z-input type='text' v-model="value" placeholder="User Name" disabled></z-input>
	<h3>多行文本框</h3>
	<z-input type='text' v-model="value" labelName="Message" multiple labelFloat></z-input>
	<h3>密码框</h3>
	<z-input type='password' v-model="value" placeholder="Password" showPassword></z-input>
	<h3>字数统计</h3>
	<z-input type='text' v-model="value" labelName="User Name" maxlength="20" labelFloat></z-input>
	<h3>图标</h3>
	<z-input type='text' v-model="value" placeholder="Search" maxlength="20" prefix-icon="el-icon-search"></z-input>
	<z-input type='text' v-model="value" labelName="Search" maxlength="20" suffix-icon="el-icon-search"></z-input>
	<h3>可展开文本框</h3><br>
	<div class="flex">
		<i class="el-icon-search" @click="isExpand = true"></i>
		<z-input type='text' v-model="value" placeholder="Search for ..." canExpand :isExpand="isExpand" @close ="isExpand = false" suffix-icon="el-icon-close"></z-input>
	</div>
	<h3>文字提示</h3>
	<z-input type='text' v-model="value" labelName="User Name" helperText="用户名已存在" showHelperText labelFloat></z-input>
	<h3>普通文本框</h3>
	<z-input type='text' v-model="value" placeholder="User Name" normal></z-input>
	<z-input type='text' v-model="value" labelName="username" placeholder="User Name" normal></z-input>
	<z-input type='text' v-model="value" placeholder="User Name" disabled normal></z-input>
	<z-input type='text' v-model="value" placeholder="User Name" multiple normal></z-input>
	<z-input type='password' v-model="value" placeholder="Password" normal></z-input>
	<z-input type='text' v-model="value" placeholder="Search for ..." canExpand :isExpand="false" suffix-icon="el-icon-close" normal></z-input>
	<z-input type='text' v-model="value" placeholder="User Name" helperText="用户名已存在" showHelperText normal></z-input>
	<z-input type='text' v-model="value" placeholder="User Name" maxlength="20" normal></z-input>
	<z-input type='text' v-model="value" placeholder="User Name" maxlength="20" suffix-icon="el-icon-edit" normal></z-input>
	<hr>

	<h1>Button</h1>
	<h3>扁平按钮</h3>
	<z-button-group>
		<z-button type="default">默认按钮</z-button>
		<z-button type="primary">主要按钮</z-button>
		<z-button type="success">成功按钮</z-button>
		<z-button type="info">信息按钮</z-button>
		<z-button type="warning">警告按钮</z-button>
		<z-button type="danger">危险按钮</z-button>
	</z-button-group>
	<h3>浮动按钮</h3>
	<z-button-group>
		<z-button type="default" float>默认按钮</z-button>
		<z-button type="primary" float>主要按钮</z-button>
		<z-button type="success" float>成功按钮</z-button>
		<z-button type="info" float>信息按钮</z-button>
		<z-button type="warning" float>警告按钮</z-button>
		<z-button type="danger" float>危险按钮</z-button>
	</z-button-group>
	<h3>朴素按钮</h3>
	<z-button-group>
		<z-button type="default" plain>默认按钮</z-button>
		<z-button type="primary" plain>主要按钮</z-button>
		<z-button type="success" plain>成功按钮</z-button>
		<z-button type="info" plain>信息按钮</z-button>
		<z-button type="warning" plain>警告按钮</z-button>
		<z-button type="danger" plain>危险按钮</z-button>
	</z-button-group>
	<h3>圆角按钮</h3>
	<z-button-group>
		<z-button type="default" round float>默认按钮</z-button>
		<z-button type="primary" round float>主要按钮</z-button>
		<z-button type="success" round float>成功按钮</z-button>
		<z-button type="info" round float>信息按钮</z-button>
		<z-button type="warning" round float>警告按钮</z-button>
		<z-button type="danger" round float>危险按钮</z-button>
	</z-button-group>
	<h3>禁用按钮</h3>
	<z-button-group>
		<z-button type="default" disabled>默认按钮</z-button>
		<z-button type="primary" disabled>主要按钮</z-button>
		<z-button type="success" disabled>成功按钮</z-button>
		<z-button type="info" disabled>信息按钮</z-button>
		<z-button type="warning" disabled>警告按钮</z-button>
		<z-button type="danger" disabled>危险按钮</z-button>
	</z-button-group>
	<h3>图标按钮</h3>
	<z-button-group>
		<z-button type="default" icon="el-icon-search" circle float></z-button>
		<z-button type="primary" icon="el-icon-edit" circle float></z-button>
		<z-button type="success" icon="el-icon-check" circle float></z-button>
		<z-button type="info" icon="el-icon-message" circle float></z-button>
		<z-button type="warning" icon="el-icon-star-off" circle float></z-button>
		<z-button type="danger" icon="el-icon-delete" circle float></z-button>
	</z-button-group>
	<h3>tooltip按钮</h3>
	<z-button-group>
		<z-button type="default" plain v-tooltip.left="'按钮啦'">左tooltip</z-button>
		<z-button type="default" plain v-tooltip.top="'按钮啦'">上tooltip</z-button>
		<z-button type="default" plain v-tooltip.bottom="'按钮啦'">下tooltip</z-button>
		<z-button type="default" plain v-tooltip.right="'按钮啦'">右tooltip</z-button>
		<z-button type="default" plain v-tooltip.canPaste.right="'点复制试下'">可复制</z-button>
	</z-button-group>
	<h3>按钮size</h3>
	<z-button-group>
		<z-button type="primary">默认按钮</z-button>
		<z-button type="primary" size="medium">中等按钮</z-button>
		<z-button type="primary" size="small">小型按钮</z-button>
		<z-button type="primary" size="mini">超小按钮</z-button>
	</z-button-group>
	<h3>文字按钮</h3>
	<z-button-group>
		<z-button type="text">普通文字按钮</z-button>
		<z-button type="text" animation="line">下划线文字按钮</z-button>
	</z-button-group>
	<h3>加载按钮</h3>
	<z-button-group>
		<z-button type="default" float :loading="true">加载按钮</z-button>
	</z-button-group>

	<hr>

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
			value: '',
			valueswitch: false
		};
	},
	created(){
		this.loading = this.$loading({});
		setTimeout(() => {
			this.loading.close();
		}, 2000);

		setTimeout(() => {
			this.message = this.$message.warning('dasdasdfsadfsdfsad');
		}, 1000);
	},
	methods: {
		changeSwitch(e){
			console.log(e);
		}
	}
};
</script>

<style lang="scss" scoped>
.z-switch {
	margin-bottom: 30px;
}

.z-button-group{
	margin-bottom: 20px;
}
h3 {
	margin: 10px 0;
}

.z-input{
	margin: 10px 0;
}

</style>
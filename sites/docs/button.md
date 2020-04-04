## Button
	
	<z-button-group>
		<z-button>默认按钮</z-button>
		<z-button type="primary" float>主要按钮</z-button>
		<z-button type="success" float>成功按钮</z-button>
		<z-button type="info" float>信息按钮</z-button>
		<z-button type="warning" float>警告按钮</z-button>
		<z-button type="danger" float>危险按钮</z-button>
	</z-button-group>
	
	<z-button-group>
		<z-button plain>朴素按钮</z-button>
		<z-button type="primary" plain>主要按钮</z-button>
		<z-button type="success" plain>成功按钮</z-button>
		<z-button type="info" plain>信息按钮</z-button>
		<z-button type="warning" plain>警告按钮</z-button>
		<z-button type="danger" plain>危险按钮</z-button>
	</z-button-group>

	<z-button-group>
		<z-button round>圆角按钮</z-button>
		<z-button type="primary" round float>主要按钮</z-button>
		<z-button type="success" round float>成功按钮</z-button>
		<z-button type="info" round float>信息按钮</z-button>
		<z-button type="warning" round float>警告按钮</z-button>
		<z-button type="danger" round float>危险按钮</z-button>
	</z-button-group>

	<z-button-group>
		<z-button :disabled="true">默认按钮</z-button>
		<z-button type="primary" disabled>主要按钮</z-button>
		<z-button type="success" disabled>成功按钮</z-button>
		<z-button type="info" disabled>信息按钮</z-button>
		<z-button type="warning" disabled>警告按钮</z-button>
		<z-button type="danger" disabled>危险按钮</z-button>
	</z-button-group>

	<z-button-group>
		<z-button icon="el-icon-search" circle float></z-button>
		<z-button type="primary" icon="el-icon-edit" circle float></z-button>
		<z-button type="success" icon="el-icon-check" circle float></z-button>
		<z-button type="info" icon="el-icon-message" circle float></z-button>
		<z-button type="warning" icon="el-icon-star-off" circle float></z-button>
		<z-button type="danger" icon="el-icon-delete" circle float></z-button>
	</z-button-group>

	<z-button-group>
		<z-button v-tooltip.left="'按钮啦'">左tooltip</z-button>
		<z-button v-tooltip.top="'按钮啦'">上tooltip</z-button>
		<z-button v-tooltip.bottom="'按钮啦'">下tooltip</z-button>
		<z-button v-tooltip.right="'按钮啦'">右tooltip</z-button>
		<z-button v-tooltip.canPaste.right="'点复制试下'">可复制</z-button>
	</z-button-group>

	<z-button-group>
	</z-button-group>

	<z-button-group>
		<z-button type="primary">默认按钮</z-button>
		<z-button type="primary" size="medium">中等按钮</z-button>
		<z-button type="primary" size="small">小型按钮</z-button>
		<z-button type="primary" size="mini">超小按钮</z-button>
	</z-button-group>

	<z-button-group>
		<z-button type="text" float>浮动文字按钮</z-button>
		<z-button type="text" animation="line">下划线文字按钮</z-button>
		<z-button type="text">普通文字按钮</z-button>
	</z-button-group>

	<z-button-group>
		<z-button :loading="true">加载按钮</z-button>
	</z-button-group>
<template>
  <transition :name="transitionName" appear>
    <div :class="classes" v-show="show">
        <i v-if="iconClass" :class="iconClass"></i>
        <i v-else :class="typeClass"></i>
        <p class="z-message__text">{{message}}</p>
    </div>
  </transition>
</template>

<script>
export default {
	name: 'ZMessage',
	data: function() {
		return {
			show: false,
			type: '',
			message: '',
			iconClass: '',
			customClass: '',
			duration: '2000',
			closeable: false,
			transitionName: 'drop',
			closed: false      
		};
	},
	computed: {
		classes() {
			return [
				'z-message',
				this.type && !this.iconClass && `z-message--${this.type}`,
				this.closeable && 'is-closeable',
				this.customClass
			];
		},
		typeClass () {
			return [
				this.type === 'info'&& 'el-icon-info',
				this.type === 'success'&& 'el-icon-success',
				this.type === 'warning'&& 'el-icon-warning',
				this.type === 'error'&& 'el-icon-error',
				this.type === 'loading'&& 'el-icon-loading',
				this.type && 'z-message__icon'
			];
		}
	},
};
</script>

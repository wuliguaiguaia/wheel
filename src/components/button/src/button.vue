<template>
  <button :class="buttonClass" 
  ref="button" 
  :disabled="disabled || loading"
  :type="nativeType"
  :autofocus="autofocus"
  @click="handleClick"
  >
    <i :class="icon" v-if="icon && !loading"></i>
    <i class="el-icon-loading" v-if="loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
	<div v-if="animation === 'ripple' && radius" class="z-button__ripple center-absolute" >
		<div class="circle center-absolute"  
		v-show="showRipple" :style="rippleStyles"></div>
	</div>
	<div v-if="animation === 'line'" class="z-button__line"></div>
  </button>
</template>

<script>
export default {
	name: 'ZButton',
	data () {
		return {
			showRipple: false,
			radius: 0
		};
	},
	props: {
		type: {
			type: String,
			default: 'default',
			validator(val){
				return ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text'].includes(val);
			}
		},
		nativeType:{
			type: String,
			default: 'button',
			validator(val){
				return ['button', 'submit', 'reset'].includes(val);
			}
		},
		size:{
			type: String,
			validator(val){
				return ['medium','small', 'mini'].includes(val);
			}
		},
		animation: {
			type: String,
			default: 'ripple',
			validator(val){
				return ['ripple','line'].includes(val);
			}
		},
		// rippleColor: {
		// 	type: String,
		// 	default: 'rgba(0,0,0,0.1)'
		// },
		loading:Boolean,
		icon:String,
		plain:Boolean,
		round:Boolean,
		circle:Boolean,
		disabled:Boolean,
		autofocus:Boolean,
		float:Boolean,
	},
	computed: {
		buttonClass(){
			return ['z-button', 
				this.type ? 'z-button--' + this.type: '',
				this.size ? 'z-button--' + this.size: '',
				{
					'is-plain': this.plain,
					'is-round': this.round,
					'is-circle': this.circle,
					'is-disabled': this.disabled,
					'is-float': this.float,
					'is-line': this.animation === 'line'
				}
			];
		},
		rippleStyles () {
			return {
				// background: this.rippleColor,
				width: this.radius + 'px',
				height: this.radius + 'px',
			};
		}
	},
	mounted () {
		this.radius = Math.max(this.$refs.button.offsetWidth, this.$refs.button.offsetWidth);
	},
	methods: {
		handleClick () {
			this.$emit('click');
			if(this.animation === 'ripple'){
				this.showRipple = true;
				setTimeout(() => {
					this.showRipple = false;
				}, 400);
			}
		}
	}
};
</script>
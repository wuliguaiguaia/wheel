<template>
  <button :class="buttonClass" 
  ref="button" 
  :disabled="disabled || loading"
  :type="nativeType"
  :autofocus="autofocus"
  @click="$emit('click')"
  >
    <i :class="icon" v-if="icon && !loading"></i>
    <i class="icon-arrows_anticlockwise_dashed icon-loading" v-if="loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
	name: "ZButton",
	props: {
		type: {
			type: String,
			default: "default",
			validator(val){
				return ["default", "primary", "success", "warning", "danger", "info", "text"].includes(val);
			}
		},
		nativeType:{
			type: String,
			default: "button",
			validator(val){
				return ["button", "submit", "reset"].includes(val);
			}
		},
		size:{
			type: String,
			validator(val){
				return ["medium","small", "mini"].includes(val);
			}
		},
		loading:Boolean,
		icon:String,
		plain:Boolean,
		round:Boolean,
		circle:Boolean,
    disabled:Boolean,
    autofocus:Boolean
	},
	computed: {
		buttonClass(){
			return ["z-button", 
				this.type ? "z-button--" + this.type: "",
				this.size ? "z-button--" + this.size: "",
				{
					"is-plain": this.plain,
					"is-round": this.round,
					"is-circle": this.circle,
					"is-disabled": this.disabled
				}
			];
		}
	},
};
</script>
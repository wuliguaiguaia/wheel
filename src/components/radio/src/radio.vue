<template>
  <label class="z-radio">
      <span class="z-radio__input">
          <input 
          type="radio" 
          v-model="model"
          :value="label"
          >
      </span>
      <span class="z-radio__label">
          <slot></slot>
          <template v-if="!$slots.default">{{label}}</template>
      </span>
  </label>
</template>

<script>
export default {
	name: 'ZRadio',
	props:{
		disabled: Boolean,
		label: String
	},
	data(){
		return {
		};
	},
	methods:{

	},
	computed:{
		model:{
			get(){
				return this.value;
			},
			set(val){
				this.$emit('input', val);
			}
		}
	},  
};
</script>
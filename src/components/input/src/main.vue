<template>
	<transition name="show-slide">
		<div :class="classes"
			v-show="isExpand"
			@click="handleDomClick">
			<!-- top -->
			<span v-if="!placeholder && !prefixIcon" 
				:class="['z-input__label', 
				floating&&'z-input__label--float',
				focusing&&'is-focus']"
				ref="label"
			>{{labelName}}</span>

			<!-- left -->
			<span v-if="normal && labelName" class="z-input_label" 
			@click="hanleLabelClick">{{labelName}}</span>

			<!-- left-before  -->
			<span class="z-input__before" v-if="prefixIcon">
				<i v-if="prefixIcon" :class="prefixIcon"></i>
			</span>

			<!-- input -->
			<input
				v-if="!multiple"
				:class="['z-input__default', normal&&'is-normal']" 
				ref="input"
				v-bind="$attrs"
				:type="showPasssword ? 'text' : type" 
				:disabled="disabled"
				:placeholder="!labelName && placeholder"
				@click="hanleInputClick"
				@input="handleInput"
				@focus="handleFocus"
				@blur="handleBlur"
				@change="handleChange"
			>
			<textarea 
				v-else 
				:class="['z-input__multiple', normal&&'is-normal']"
				ref="input"
				v-bind="$attrs"
				:disabled="disabled"
				:placeholder="!labelName && placeholder"
				@click="hanleInputClick"
				@input="handleInput"
				@focus="handleFocus"
				@blur="handleBlur"
				@change="handleChange"
			></textarea>

			<!-- right-before -->
			<div class="z-input__end" v-show="isExpand">
				<i v-if="suffixIcon || type === 'password'" 
				ref="suffixIcon"
				:class="suffixIconClass" @click="hanldeIconClick"></i>
				<span v-if="maxlength && !(suffixIcon || type === 'password')" class="z-input__limit">
					{{textNumber}}/{{+maxlength}}
				</span>
			</div>

			<!-- under -->
			<div :class="['z-input__under', helperText?'jus-between': 'jus-end']" 
				v-if="helperText || (suffixIcon && maxlength)">
				<p v-if="helperText" v-show="showHelperText" class="z-input__helperText">{{helperText}}</p>
				<span v-if="suffixIcon && maxlength" class="z-input__limit">
					{{textNumber}}/{{+maxlength}}
				</span>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'ZInput',
	data () {
		return {
			showPasssword: false,
			focusing: false,
			floating: false
		};
	},
	inheritAttrs: false,
	props: {
		type: {
			type: String,
			default: 'text',
			validator (val){
				return ['text', 'password'].includes(val);
			}
		},
		placeholder: {
			type: String,
		},
		isExpand: {
			type: Boolean,
			default: true
		},
		showHelperText: {
			type: Boolean,
			default: true
		},
		value: [String, Number],
		labelName: [String],
		labelFloat: Boolean,
		labelFix: Boolean,
		multiple: Boolean,
		canExpand: Boolean,
		prefixIcon: String,
		suffixIcon: String,
		helperText: String,
		maxlength: [String, Number],
		normal: Boolean,
		disabled: Boolean
	},
	computed:{
		classes () {
			return [
				'z-input',
				(this.labelFloat || this.labelFix)&&'is-label-move',
				this.disabled && 'is-disabled',
				// this.normal&&'is-normal',
				this.canExpand && 'is-expand',
				this.prefixIcon && 'is-prefix',
				this.suffixIconClass.filter(v=>v).length && 'is-suffix',
				this.helperText || (this.suffixIcon && this.maxlength) && 'is-under'
			];
		},
		suffixIconClass () {
			return [
				this.type !== 'password'&&this.suffixIcon,
				this.type === 'password'&&this.value.trim()&&'el-icon-view'
			];
		},
		textNumber () {
			return this.value && this.value.length || 0;
		}
	},
	watch: {
		labelFix: {
			handler (val) {
				this.floating = val;
			},
			immediate: true
		},
		floating: {
			handler (val) {
				this.$nextTick( () => {
					if(!this.$refs.label) return;
					if (val) {
						this.$refs.label.style.transform = '';
					} else {
						let offsetY = this.$refs.input.offsetHeight - 4;  // 下padding
						this.$refs.label.style.transform = `translateY(${offsetY}px)`;
					}
				});
			},
			immediate: true
		}
	},
	mounted () {
	},
	methods: {
		hanldeIconClick () {
			if(this.$refs.suffixIcon.classList.contains('el-icon-close')){
				this.$emit('close');
				this.value = '';
			}

			if(this.$refs.suffixIcon.classList.contains('el-icon-view')){
				this.showPasssword = !this.showPasssword;
			}
		},
		hanleInputClick () {
			if (this.normal) {
				console.log();
			} else {
				this.floating = true;
				console.log();
			}
		},
		hanleLabelClick () {
			// this.$refs.input.focus();
		},
		handleDomClick () {
			this.$refs.input.focus();
			if (this.normal) {
				console.log();
			} else {
				this.floating = true;
			}
		},
		handleInput (e) {
			this.$emit('input', e.target.value);
		},
		handleFocus (e) {
			this.$emit('focus', e.target.value);
			this.focusing = true;
		},
		handleChange (e) {
			this.$emit('change', e.target.value);
		},
		handleBlur (e) {
			this.$emit('blur', e.target.value);
			this.focusing = false;
			if (this.normal) {
				console.log(123);
			} else {
				if (!this.value.trim() && !this.labelFix) {
					this.floating = false;
				}
			}
		}
	}
};
</script>
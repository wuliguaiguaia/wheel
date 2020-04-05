<template>
  <div :class="classes"
    @click="switchValue"
  >
    <span class="z-switch__inner">
      <transition name="fade">
        <span v-if="insideText" v-show="active" class="z-switch__inside-text">{{activeText}}</span>
      </transition>
      <span class="z-switch__slide" ref="slide" tabindex="0"></span>
      <transition name="fade">
        <span v-if="insideText" v-show="!active" class="z-switch__inside-text--right">{{inactiveText}}</span>
      </transition>
    </span>
    <span v-if="!insideText" class="z-switch__label">{{curText}}</span>
  </div>
</template>

<script>
export default {
	name: 'ZSwitch',
	data() {
		return {
			curValue: '',
			curText: '',
			curInsideText: ''
		};
	},
	props: {
		value: {
			type: [Boolean, String, Number],
			default: false
		},
		activeValue: {
			type: [Boolean, String, Number],
			default: true
		},
		inactiveValue: {
			type: [Boolean, String, Number],
			default: false
		},
		activeText: String,
		inactiveText: String,
		insideText: Boolean,
		disabled: Boolean,
		normal: Boolean
	},
	computed: {
		classes () {
			return [
				'z-switch',
				this.normal && 'z-switch--normal',
				this.disabled && 'is-disabled',
				this.active && 'is-active'
			];
		},
		checked () {
			return this.value === this.activeValue;
		},
		active: {
			get () {
				return this.value === this.activeValue;
			},
			set (val) {
				this.curValue = val ? this.activeValue : this.inactiveValue;
				this.curText = !val ? this.activeText : this.inactiveText;
				this.curInsideText = val ? this.activeText : this.inactiveText;
			}
		},
	},
	mounted () {
		this.active = this.value === this.activeValue;
	},
	methods: {
		switchValue () {
			this.active = !this.active;
			this.$emit('input', this.curValue);
			this.$emit('change', this.curValue);
			this.$refs.slide.focus();
		}
	}
};
</script>

<template>
  <transition name="fade" appear>
    <div :class="classes" v-if="show" ref="tooltip">
      <div class="z-tooltip__content" >
		<span>{{this.content}}</span>
        <span class="z-tooltip__paste" v-show="canPaste" @click="paste">复制</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
	name: 'ZTooltip',
	data () {
		return {
			show: false,
			placement: '',
			content: '',
			canPaste: true
		};
	},
	computed: {
		classes () {
			return [
				'z-tooltip',
				this.placement && `z-tooltip--${this.placement}`,
			];
		}
	},
	methods: {
		paste () {
			const input = document.createElement('input');
			input.setAttribute('readonly', 'readonly');
			input.value = this.content;
			this.$refs.tooltip.appendChild(input);
			input.select();
			input.setSelectionRange(0, 9999); // ios?
			if (document.execCommand('copy')) {
				document.execCommand('copy');
			}
			this.$refs.tooltip.removeChild(input);
		}
	}
};
</script>

<template>
  <transition name="fade" appear>
    <div class="z-loading" v-show="show">
      <div class="z-loading__bar" ></div>
      <div class="z-loading__spin"></div>
      <div v-if="text" class="z-loading__text">{{text}}</div>
    </div>
  </transition>
</template>

<script>
export default {
	name: 'ZLoading',
	data: function() {
		return {
			show: false,
			customTip: 'bar',
			text: ''
		};
	}
};
</script>

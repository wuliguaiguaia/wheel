<template>
  <transition name="fade">
    <div class="z-loading" v-show="show">
      <div class="z-loading-bar" v-if="customTip === 'bar'"></div>
      <div class="z-loading-spin" v-else-if="customTip === 'circle'" >
        <svg class="circle" viewBox="25 25 50 50">
          <defs>
            <linearGradient id="grad">
              <stop offset="0%" style="stop-color:#f1c061;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#56e098;stop-opacity:1" />
            </linearGradient>
          </defs>
          <circle class="path" cx="50" cy="50" r="15" stroke-width="2" stroke="url(#grad)" fill="none"/>
        </svg>
      </div>
      <div v-else></div>
      <div v-if="text">{{text}}</div>
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

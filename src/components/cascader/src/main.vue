<template>
  <div class="z-cascader" v-clickoutside="closeCascader">
    <div class="z-cascader__trigger" >
      <input type="text" :placeholder="placeholder" v-model="selectedString" @click="isShow = !isShow">
    </div>
    <div class="z-cascader__panel" v-show="isShow">
      <template v-for="item in options">
        <z-cascader-panel :options="item" :key="item.value" :selected.sync="selected"></z-cascader-panel>
      </template>
    </div>
  </div>
</template>

<script>
import ZCascaderPanel from './cascader-panel';
import clickoutside from '@/directives/clickoutside';
export default {
	name: 'ZCascader',
	props: { 
		options: Array,
		showAllLevels: Boolean,
		filterable: Boolean,
		placeholder: String,
		props: Object
	},
	data () {
		return {
			selected: [],
			isShow: false
		};
	},
	computed:{
		selectedString(){
			return this.selected.join('/');
		}
	},
	directives: {clickoutside},
	components: {ZCascaderPanel},
	methods: {
		closeCascader(){
			this.isShow = false;
		}
	}
};
</script>

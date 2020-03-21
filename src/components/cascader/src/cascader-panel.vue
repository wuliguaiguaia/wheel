<template>
    <div class="z-cascader__wrapper">
        <div class="z-cascader__panel--value" @click="handleSelect(index)">
            {{options.label}}
        </div>
        <div class="z-cascader__panel--inner" v-if="options.children">
            <template v-for="item in options.children">
                <z-cascader-panel :options="item" :key="item.value" :index="index+1" v-show="selected[index] === options.label" :selected.sync="selected"></z-cascader-panel>
            </template>
        </div>
    </div>
</template>

<script>
export default {
	name: 'ZCascaderPanel',
	props: {
		options: Object,
		selected: Array,
		index: {
			type: Number,
			default: 0
		}
	},
	data () {
		return {
			isShow: false
		};
	},
	methods:{
		handleSelect(idx) {
			this.selected.splice(idx, 1, this.options.label);
			this.selected.splice(idx+1, this.selected.length - this.index);
		}
	}
};
</script>
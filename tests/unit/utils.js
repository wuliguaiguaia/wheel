import Vue from 'vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

/**
 * 销毁vue实例
 * @param {Object} vm
 */
export const destroyVM = vm => {
	vm.$el && vm.$el.remove();
	vm.$destroy && vm.$destroy();
};

/**
 * 创建测试组件实例
 * @param {Object} comp 组件对象
 * @param {Object = {}} propsData props数据
 * @return {Object} vm
 */
export const createTest = (comp, propsData = {}) => {
	const constructor = Vue.extend(comp);
	const vm = new constructor({ propsData });
	return vm.$mount();
};
import Loading from './main.vue';
// import Vue from 'vue';
const loadingDirective = {};
loadingDirective.install = Vue =>{
	Vue.directive('loading', {
		bind () {},
		update () {},
		unbind () {}
	});
};

export default loadingDirective;
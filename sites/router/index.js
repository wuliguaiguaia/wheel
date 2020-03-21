import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import home from './../pages/home/index';
import quickStart from './../pages/quickStart/index';

// const home = () => import(/* webpackChunkName: "home" */ '../pages/home/index');
// const quickStart = () => import(/* webpackChunkName: "quickStart" */ '../pages/quickStart/index');

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/home',
			component: home,
			children: [
				{
					path: '/home',
					component: home
				},
				{
					path: '/quickStart',
					component: quickStart
				},
			]
		}
	]
});
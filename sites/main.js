import Vue from 'vue';
import app  from './app';
import ZWheel from './../src/index';
// import "./icon/iconfont.scss";
import router from './router';
import './../src/styles/components/index.scss';
import './common/styles/reset.css';

Vue.use(ZWheel);
Vue.config.productionTip = false;
console.log(router);

new Vue({
	render: h => h(app),
	router
}).$mount('#app');
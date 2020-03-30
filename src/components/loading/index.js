import directive from './src/directive';
import service from './src/service';

export default {
	install (Vue) { //单独引入
		Vue.use(directive);
		Vue.prototype.$loading = service;
	},
	service,
	directive
};

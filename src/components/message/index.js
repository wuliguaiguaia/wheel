import service from './src/service';

export default {
	install (Vue) {
		Vue.prototype.$message = service;
	},
	service
};

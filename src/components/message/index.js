import ZMessage from './src/main';

ZMessage.install = function(Vue) {
	Vue.component(ZMessage.name, ZMessage);
};

export default ZMessage;

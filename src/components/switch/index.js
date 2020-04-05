import ZSwitch from './src/main';

ZSwitch.install = function(Vue) {
	Vue.component(ZSwitch.name, ZSwitch);
};

export default ZSwitch;

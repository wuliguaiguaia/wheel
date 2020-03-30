import Vue from 'vue';
import Loading from './main';

const constructor = Vue.extend(Loading);

constructor.prototype.close = function() {
	const loadingBar = document.querySelector('.z-loading__bar');
	loadingBar.classList.add('end');
	loadingBar.style.width = '101%';
	
	setTimeout(() => {
		this.show = false;
		this.$destroy();
		document.body.removeChild(document.querySelector('.z-loading'));
	}, 300);
};

let loadingTimer = null;
const loadingService = (options = {}) => {
	const instance = new constructor({
		el: document.createElement('div'),
		data: options
	});
	document.body.append(instance.$el);
	Vue.nextTick(() => {
		instance.show = true;
		const loadingBar = instance.$el.querySelector('.z-loading__bar');
		let width = 1;
		loadingTimer = setInterval( () => {
			if(width >= 90) clearInterval(loadingTimer);
			loadingBar.style.width = `${width++}%`;
		},1);
	});
	return instance;
};

export default loadingService;
import Vue from 'vue';
import Message from './main';

const constructor = Vue.extend(Message);

constructor.prototype.close = function () {
	let el = this.$el;
	if(this.transitionName === 'drop'){
		el.style.top = '-100%';

	} else {
		el.style.left = '100%';
		el.style.transform = 'translateX(-50%)';
	}

	setTimeout(() => {
		document.body.removeChild(document.querySelector('.z-message'));
		this.$destroy();
	}, 300);
};

const messageService = (options = {}) => {
	typeof options === 'string' && (options = {message: options});
	!['drop','pull'].includes(options.transitionName) && (options.transitionName = 'drop');
	!options.duration && (options.duration = '2000');
	!options.type && (options.type = 'info');
	const instance = new constructor({
		el: document.createElement('div'),
		data: options
	});
	document.body.append(instance.$el);
	instance.show = true;
	setTimeout(() => {
		instance.close();
	}, options.duration);
	return instance;
};

['success', 'warning', 'info', 'error', 'loading'].forEach( item => {
	messageService[item] = (options = {}) => {
		typeof options === 'string' && (options = { message: options });
		options.type = item;
		return messageService(options);
	};
});

export default messageService;
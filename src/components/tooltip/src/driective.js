import Vue from 'vue';
import Tooltip from './main.vue';

const tooltipDirective = {};
const constructor = Vue.extend(Tooltip);

constructor.prototype.show = function () {
	this.show = true;
};

constructor.prototype.hide = function () {
	const el = this.$el;
	this.show = false;
	this.$destroy();
	console.log(el);
};

const createTooltipDom = (el, binding) => {
	el.classList.add('is-tooltip');
	const options = {},
		placement = binding.arg,
		value = binding.value,
		modifiers = Object.keys(binding.modifiers);
        
	if (placement && ['top', 'bottom', 'left', 'right'].includes(placement)) {
		options.placement = placement;
	} else {
		const place = modifiers.find(item => ['top', 'bottom', 'left', 'right'].includes(item));
		options.placement = place || 'bottom';
	}
	
	!modifiers.includes('canPaste') && (options.canPaste = false);
	options.content = value;
    
	const instance = new constructor({
		el: document.createElement('div'),
		data: options
	});
	el.appendChild(instance.$el);
    
	const position = window.getComputedStyle(el).position;
	!position && (el.style.position = 'relative');
    
	return instance;
};

let overflow = null;

const enter = function (instance) {
	instance.show = true;
	overflow = window.getComputedStyle(this).overflow;
	this.style.overflow = 'visible';
	Vue.nextTick(() => {
		instance.$el.addEventListener('click', () => {
			this.style.overflow = overflow;
			return false;
		});
	});
};

const leave = function (instance) {
	instance.show = false;
	this.style.overflow = overflow;
};

tooltipDirective.install = Vue => {
	Vue.directive('tooltip', {
		bind(el, binding) {
			const instance = createTooltipDom(el, binding);
			el.addEventListener('mouseenter', enter.bind(el, instance));
			el.addEventListener('mouseleave', leave.bind(el, instance));
		},
		update() { },
		unbind(el) { 
			el.removeEventListener('mouseenter', enter);
			el.removeEventListener('mouseleave', leave);
		}
	});
};

export default tooltipDirective;
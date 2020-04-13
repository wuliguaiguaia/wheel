/**
 * @name v-clickoutside
 * @desc 点击元素以外的地方触发
 * @info 监听器的数量
 */

const callbacks = [];
document.addEventListener('click', e => {
	const { target } = e;
	callbacks.forEach(item => {
		if (e.target === item.el || item.el.contains(target)) {
			return;
		}
		item.callback();
	});
});
export default {
	bind(el, binding) {
		document.addEventListener('click', () => {
			callbacks.push({ el, callback: binding.value });
		});
	}
};
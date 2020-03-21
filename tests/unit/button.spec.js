import { destroyVM, createTest } from './utils';
import Button from '@/components/button';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
chai.use(sinonChai);

// 1\done 异步代码测试 哪的异步？
describe('Button',() => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it('create', () => {
		vm = createTest(Button, {
			type: 'primary'
		});
		let el = vm.$el;
		expect(el.classList.contains('z-button--primary')).to.be.true;
	});

	it('nativeType', () => {
		vm = createTest(Button, {
			nativeType: 'submit'
		});
		let el = vm.$el;
		expect(el.getAttribute('type')).to.equal('submit');
	});

	it('click', () => {
		vm = createTest(Button);
		let callback = sinon.fake();
		vm.$on('click', callback);
		let el = vm.$el;
		el.click();
		expect(callback).to.have.been.called;
	});
});

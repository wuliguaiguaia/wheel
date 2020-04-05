import { destroyVM, createTest } from './utils';
import Switch from '@/components/switch';
import { expect } from 'chai';

describe('Switch', () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it('create', () => {
		vm = createTest(Switch);
		expect(vm.$el).to.exist;
	});
});


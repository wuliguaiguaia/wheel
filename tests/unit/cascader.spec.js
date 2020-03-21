import { destroyVM, createTest } from './utils';
import Cascader from '@/components/cascader';
import { expect } from 'chai';

describe('Cascader', () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it('create', () => {
		vm = createTest(Cascader);
		expect(vm.$el).to.exist;
	});
});


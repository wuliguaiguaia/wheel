import { destroyVM, createTest } from './utils';
import Input from '@/components/input';
import { expect } from 'chai';

describe('Input', () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it('create', () => {
		vm = createTest(Input);
		expect(vm.$el).to.exist;
	});
});


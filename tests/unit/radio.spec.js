import { destroyVM, createTest } from './utils';
import Radio from '@/components/radio';
import { expect } from 'chai';

describe('Radio', () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it('create', () => {
		vm = createTest(Radio);
		expect(vm.$el).to.exist;
	});
});


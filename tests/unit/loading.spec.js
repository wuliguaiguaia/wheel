import { destroyVM, createTest } from './utils';
import Loading from '@/components/loading';
import { expect } from 'chai';

describe('Loading', () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it('create', () => {
		vm = createTest(Loading);
		expect(vm.$el).to.exist;
	});
});


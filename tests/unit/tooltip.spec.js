import { destroyVM, createTest } from './utils';
import Tooltip from '@/components/tooltip';
import { expect } from 'chai';

describe('Tooltip', () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it('create', () => {
		vm = createTest(Tooltip);
		expect(vm.$el).to.exist;
	});
});


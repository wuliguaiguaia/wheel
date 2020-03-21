import { destroyVM, createTest } from './utils';
import ButtonGroup from '@/components/button-group';
import { expect } from 'chai';

describe('ButtonGroup', () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it('create', () => {
		vm = createTest(ButtonGroup);
		expect(vm.$el).to.exist;
	});
});


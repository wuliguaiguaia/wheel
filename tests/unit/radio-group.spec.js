import { destroyVM, createTest } from './utils';
import RadioGroup from '@/components/radio-group';
import { expect } from 'chai';

describe('RadioGroup', () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it('create', () => {
		vm = createTest(RadioGroup);
		expect(vm.$el).to.exist;
	});
});



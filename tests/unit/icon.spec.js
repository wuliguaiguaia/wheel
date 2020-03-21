import { destroyVM, createTest } from './utils';
import Icon from '@/components/icon';
import { expect } from 'chai';

describe('Icon', () => {
	let vm;
	afterEach(() => {
		destroyVM(vm);
	});

	it('create', () => {
		vm = createTest(Icon);
		expect(vm.$el).to.exist;
	});
});


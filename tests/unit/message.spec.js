import { destroyVM, createTest } from './utils';
import Message from '@/components/message';
import { expect } from 'chai';

describe('Message', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it("create", () => {
    vm = createTest(Message);
    expect(vm.$el).to.exist;
  });
});


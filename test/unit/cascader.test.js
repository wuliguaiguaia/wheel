import { destroyVM, createTest } from './utils';
import Cascader from '../../src/components/cascader';

describe('Cascader', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it("create", () => {
    vm = createTest(Cascader);
    expect(vm.$el).to.exist;
  });
});


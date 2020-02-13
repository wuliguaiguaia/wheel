import { destroyVM, createTest } from './utils';
import Input from '../../src/components/input';

describe('Input', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it("create", () => {
    vm = createTest(Input);
    expect(vm.$el).to.exist;
  });
});


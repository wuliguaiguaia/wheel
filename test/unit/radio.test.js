import { destroyVM, createTest } from './utils';
import Radio from '../../src/components/radio';

describe('Radio', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it("create", () => {
    vm = createTest(Radio);
    expect(vm.$el).to.exist;
  });
});


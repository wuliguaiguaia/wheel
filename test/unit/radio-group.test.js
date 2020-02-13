import { destroyVM, createTest } from './utils';
import RadioGroup from '../../src/components/radio-group';

describe('RadioGroup', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it("create", () => {
    vm = createTest(RadioGroup);
    expect(vm.$el).to.exist;
  });
});


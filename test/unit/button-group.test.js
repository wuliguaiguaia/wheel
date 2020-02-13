import { destroyVM, createTest } from './utils';
import ButtonGroup from '../../src/components/button-group';

describe('ButtonGroup', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it("create", () => {
    vm = createTest(ButtonGroup);
    expect(vm.$el).to.exist;
  });
});


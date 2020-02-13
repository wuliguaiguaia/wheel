import { destroyVM, createTest } from './utils';
import Icon from '../../src/components/icon';

describe('Icon', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it("create", () => {
    vm = createTest(Icon);
    expect(vm.$el).to.exist;
  });
});

